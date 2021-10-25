import { get } from "lodash";

export const getSessionUserId = (state) => get(state, "auth.session.user.id");
