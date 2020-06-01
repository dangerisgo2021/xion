// actions to debounce
const debounced = {};

export const debounce = () => (next) => (action) => {
  const debounce = action?.meta?.debounce;

  // move along if debounced not set
  if (!debounce) {
    next(action);
  } else {
    if (debounced[action.type]) {
      clearTimeout(debounced[action.type].timeout);
    }
    debounced[action.type] = {
      timeout: setTimeout(() => {
        next(debounced[action.type].action);
      }, debounce),
      action,
    };
  }
};
