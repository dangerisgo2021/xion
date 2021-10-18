import { createWrapper } from "next-redux-wrapper";
import { createReduxStoreFromConfig } from "app/state/utils/factories/createReduxStoreFromConfig";
import { config } from "app/state/redux.config";
import {storeCreated} from "app/state/actions";

const makeStore = (_context) => {
  const store = createReduxStoreFromConfig(config);

  if (process.browser) {
    if (!(window as any)?.__REDUX_STORE__) {
      (window as any).__REDUX_STORE__ = store;
    }
    //let client know store is created
    store.dispatch(storeCreated())
  }

  return store;
};

export const withRedux = createWrapper(makeStore).withRedux;
