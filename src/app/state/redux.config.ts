import { rootReducer } from "./rootReducer";
import { middleware } from "./middleware";

const getReduxDevToolsEnhancer = () => {
  if (!process.browser) {
    return [];
  } else {
    //cannot reference window on server
    // @ts-ignore __REDUX_DEVTOOLS_EXTENSION__ is injected by the extension
    const reduxDevToolsEnhancer = window?.__REDUX_DEVTOOLS_EXTENSION__();

    if (!reduxDevToolsEnhancer) {
      return [];
    } else {
      return [reduxDevToolsEnhancer];
    }
  }
};

export const config = {
  middleware,
  enhancers: [...getReduxDevToolsEnhancer()],
  rootReducer,
};
