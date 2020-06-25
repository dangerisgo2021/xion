export const createWatcherMiddleware = ({
  actionType,
  execute,
  preReducer = false,
  postReducer = false,
  context = {},
}) => {
  return (store) => (next) => (action) => {
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
