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
