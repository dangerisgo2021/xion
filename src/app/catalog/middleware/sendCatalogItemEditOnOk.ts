import { message } from "antd";
import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { updateCatalogItemMutation } from "app/catalog/mutations/updateCatalogItemMutation";
import { editCatalogItemFormValidated } from "../actions";

export const sendCatalogItemEditOnOk = createWatcherMiddleware({
  actionType: editCatalogItemFormValidated.type,
  postReducer: true,
  execute: async ({ action }) => {
    apolloClient
      .mutate({
        mutation: updateCatalogItemMutation,
        variables: {
          input: {
            id: action?.payload?.catalogItem?.id,
            name: action?.payload?.catalogItem?.name,
          },
        },
        refetchQueries: ["vendorCategoryItemsQuery"],
      })
      .then(() => {
        message.success("Successfully saved");
      });
  },
});
