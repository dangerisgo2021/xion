import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "services/gateway/graphql/initGraphqlClient";
import { addVendorOkClicked } from "../actions";
import { pick } from "lodash";
import { registerVendorMutation } from "app/catalog/mutations/registerVendorMutation";

export const registerVendor = createWatcherMiddleware({
  actionType: addVendorOkClicked.type,
  postReducer: true,
  execute: async ({ action }) => {
    apolloClient.mutate({
      mutation: registerVendorMutation,
      variables: {
        ...pick(action.payload, ["name"]),
      },
      refetchQueries: ["vendorsQuery"],
    });
  },
});
