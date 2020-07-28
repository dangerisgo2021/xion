import { actionCreatorFactory } from "app/state/utils/factories/actionCreatorFactory";

const namespace = "checkout";

export const checkoutFormValidated = actionCreatorFactory({
  namespace,
  type: "checkoutFormValidated",
});

export const checkoutFormValidationFailed = actionCreatorFactory({
  namespace,
  type: "checkoutFormValidationFailed",
});

export const receivedCheckoutSummary = actionCreatorFactory({
  namespace,
  type: "receivedCheckoutSummary",
});
