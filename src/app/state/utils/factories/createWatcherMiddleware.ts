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
      const executeArgs = {
        state,
        action,
        context,
        dispatch: store.dispatch,
      };
      if (preReducer) {
        execute(executeArgs);
      }

      next(action);

      if (postReducer) {
        execute(executeArgs);
      }
    }
  };
};
