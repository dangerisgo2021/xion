export const createWatcherMiddleware = ({
  actionType,
  execute,
  preReducer = false,
  postReducer = false,
  context = {},
}) => {
  console.log("create watcher called", { actionType });

  return (store) => (next) => (action) => {
    console.log("watcher called", { action, actionType });
    if (action.type !== actionType) {
      next(action);
    } else if (action.type === actionType) {
      const state = store.getState();

      if (preReducer) {
        execute({ state, action, context });
      }

      next(action);

      if (postReducer) {
        execute({ state, action, context });
      }
    }
  };
};
