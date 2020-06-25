import { actionCreatorFactory } from "app/state/utils/factories/actionCreatorFactory";

const namespace = "forms";

export const addFormClicked = actionCreatorFactory({
  namespace,
  type: "addFormClicked",
});
