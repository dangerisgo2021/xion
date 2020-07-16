import { actionCreatorFactory } from "app/state/utils/factories/actionCreatorFactory";

const namespace = "orders";

export const completeActiveOrderClicked = actionCreatorFactory({
  namespace,
  type: "completeActiveOrderClicked",
});

export const cancelActiveOrderClicked = actionCreatorFactory({
  namespace,
  type: "cancelActiveOrderClicked",
});

export const frontDeskFormValidated = actionCreatorFactory({
  namespace,
  type: "frontDeskFormValidated",
});

export const frontDeskFormValidationFailed = actionCreatorFactory({
  namespace,
  type: "frontDeskFormValidationFailed",
});
