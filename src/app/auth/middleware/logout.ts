import { menuItemClicked } from "app/avatar/actions";
import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { getAuthClient } from "../AuthProvider";
export const logout = createWatcherMiddleware({
  actionType: menuItemClicked.type,
  postReducer: true,
  execute: ({ action }) => {
    const authClient = getAuthClient();
    if (action?.payload?.id === "logout") {
      authClient.logout();
    }
  },
});
