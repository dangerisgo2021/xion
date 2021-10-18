import { actionCreatorFactory } from "app/state/utils/factories/actionCreatorFactory";

const namespace = "store";

export const storeCreated = actionCreatorFactory({
  namespace,
  type: "created",
});

