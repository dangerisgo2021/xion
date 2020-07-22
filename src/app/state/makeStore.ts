import { createReduxStoreFromConfig } from "app/state/utils/factories/createReduxStoreFromConfig";
import { config } from "app/state/redux.config";

export const makeStore = (initialState) => {
  return createReduxStoreFromConfig({ ...config, initialState });
};
