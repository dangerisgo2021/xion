import { actionCreatorFactory } from "app/state/utils/factories/actionCreatorFactory";

const namespace = "catalog";

export const addCatalogItemClicked = actionCreatorFactory({
  namespace,
  type: "addCatalogItemClicked",
});

export const addCatalogItemOkClicked = actionCreatorFactory({
  namespace,
  type: "addCatalogItemOkClicked",
});

export const addCatalogItemCancelClicked = actionCreatorFactory({
  namespace,
  type: "addCatalogItemCancelClicked",
});

export const editCatalogItemClicked = actionCreatorFactory({
  namespace,
  type: "editCatalogItemClicked",
});

export const editCatalogItemOkClicked = actionCreatorFactory({
  namespace,
  type: "editCatalogItemOkClicked",
});

export const editCatalogItemCancelClicked = actionCreatorFactory({
  namespace,
  type: "editCatalogItemCancelClicked",
});

export const editCatalogItemFormValidated = actionCreatorFactory({
  namespace,
  type: "editCatalogItemFormValidated",
});

export const editCatalogItemFormValidationFailed = actionCreatorFactory({
  namespace,
  type: "editCatalogItemFormValidationFailed",
});

export const addVendorButtonClicked = actionCreatorFactory({
  namespace,
  type: "addVendorButtonClicked",
});

export const addVendorCanceled = actionCreatorFactory({
  namespace,
  type: "addVendorCanceled",
});

export const addVendorOkClicked = actionCreatorFactory({
  namespace,
  type: "addVendorOkClicked",
});
