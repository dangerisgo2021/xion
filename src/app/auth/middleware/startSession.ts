import { signIn } from "next-auth/react";
import { userLoginRequested } from "app/auth/actions";

export const startSession = () => (next) => async (action) => {
  next(action);

  if (action.type === userLoginRequested.type) {
    await signIn();
  }
};
