import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { addCatalogItemOkClicked } from "app/catalog/actions";
import { pick } from "lodash";
import { addCatalogItemMutation } from "../mutations/addCatalogItemMutation";

export const addCatalogItem = createWatcherMiddleware({
  actionType: addCatalogItemOkClicked.type,
  postReducer: true,
  execute: async ({ action }) => {
    apolloClient.mutate({
      mutation: addCatalogItemMutation,
      variables: {
        ...pick(action?.payload, ["name"]),
        vendorId: action?.payload?.vendor?.id,
        limit: 10,
      },
      refetchQueries: ["vendorCategoryItemsQuery"],
    });
  },
});
