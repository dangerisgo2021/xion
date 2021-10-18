import { getSession } from "next-auth/react";
import { sessionReceived } from "app/auth/actions";
import { storeCreated } from "app/state/actions";

export const getLatestSession = (store) => (next) => async (action) => {
  next(action);

  if (action.type === storeCreated.type) {
    const session = await getSession();
    store.dispatch(sessionReceived({ session }));
  }
};
