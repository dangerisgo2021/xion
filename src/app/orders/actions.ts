import { actionCreatorFactory } from "app/state/utils/factories/actionCreatorFactory";

const namespace = "orders";

export const completeOrderClicked = actionCreatorFactory({
  namespace,
  type: "completeOrderClicked",
});

export const cancelOrderClicked = actionCreatorFactory({
  namespace,
  type: "cancelOrderClicked",
});

export const frontDeskFormValidated = actionCreatorFactory({
  namespace,
  type: "frontDeskFormValidated",
});

export const frontDeskFormValidationFailed = actionCreatorFactory({
  namespace,
  type: "frontDeskFormValidationFailed",
});
export const assignToMeClicked = actionCreatorFactory({
  namespace,
  type: "assignToMeClicked",
});
