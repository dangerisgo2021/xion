import { actionCreatorFactory } from "app/state/utils/factories/actionCreatorFactory";

const namespace = "forms";

export const addFormButtonClicked = actionCreatorFactory({
  namespace,
  type: "addFormButtonClicked",
});

export const addFormOkClicked = actionCreatorFactory({
  namespace,
  type: "addFormOkClicked",
});

export const addFormCancelClicked = actionCreatorFactory({
  namespace,
  type: "addFormCancelClicked",
});
