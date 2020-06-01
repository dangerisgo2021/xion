import { menuItemClicked } from "app/avatar/actions";
import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";

export const login = createWatcherMiddleware({
  actionType: menuItemClicked.type,
  postReducer: true,
  execute: ({ state, action, context }) => {
    console.log({ state, action, context });
  },
});
