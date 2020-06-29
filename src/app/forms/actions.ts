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

export const formEditClicked = actionCreatorFactory({
  namespace,
  type: "formEditClicked",
});

export const saveFormValidated = actionCreatorFactory({
  namespace,
  type: "saveFormValidated",
});

export const saveFormValidationFailed = actionCreatorFactory({
  namespace,
  type: "saveFormValidationFailed",
});
