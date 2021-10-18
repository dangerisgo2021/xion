import { signOut } from "next-auth/react";
import { userLogoutRequested } from "app/auth/actions";

export const endSession = () => (next) => async (action) => {
  next(action);

  if (action.type === userLogoutRequested.type) {
    await signOut();
  }
};
