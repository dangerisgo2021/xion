import { actionCreatorFactory } from "app/state/utils/factories/actionCreatorFactory";

const namespace = "reports";

export const createOrderReportFormValidated = actionCreatorFactory({
  namespace,
  type: "createOrderReportFormValidated",
});

export const createOrderReportFormValidationFailed = actionCreatorFactory({
  namespace,
  type: "createOrderReportFormValidationFailed",
});

export const receivedOrdersReport = actionCreatorFactory({
  namespace,
  type: "receivedOrdersReport",
});
