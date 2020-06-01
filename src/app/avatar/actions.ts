import { actionCreatorFactory } from "app/state/utils/factories/actionCreatorFactory";

const namespace = "avatar";

export const menuItemClicked = actionCreatorFactory({
  namespace,
  type: "menuItemClicked",
});
