// actions to throttle
const throttled = {};

export const throttle = () => next => action => {
    const throttle = action?.meta?.throttle;

    // move along if throttled not set
    if (!throttle) return next(action);
    // throttle action if in throttled map
    else if (throttled[action.type]) {
        return;
    }
    //start throttling action
    throttled[action.type] = true;

    //disable throttle
    setTimeout(() => {
        throttled[action.type] = false;
    }, throttle);

    // execute throttled action
    next(action);
};