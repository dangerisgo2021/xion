import { get } from "lodash";

export const getSessionUserEmail = (state) =>
  get(state, "auth.session.user.email");
