import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { cancelActiveOrderClicked } from "../actions";
import { cancelOrderMutation } from "../mutations/cancelOrderMutation";

export const cancelActiveOrder = createWatcherMiddleware({
  actionType: cancelActiveOrderClicked.type,
  postReducer: true,
  execute: async ({ action }) => {
    apolloClient.mutate({
      mutation: cancelOrderMutation,
      variables: {
        input: {
          id: action?.payload?.id,
        },
      },
      refetchQueries: ["activeOrdersQuery"],
    });
  },
});
