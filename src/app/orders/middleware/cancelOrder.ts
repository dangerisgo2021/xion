import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { cancelOrderClicked } from "../actions";
import { cancelOrderMutation } from "../mutations/cancelOrderMutation";

export const cancelOrder = createWatcherMiddleware({
  actionType: cancelOrderClicked.type,
  postReducer: true,
  execute: async ({ action }) => {
    apolloClient.mutate({
      mutation: cancelOrderMutation,
      variables: {
        input: {
          id: action?.payload?.orderId,
        },
      },
      refetchQueries: ["activeOrdersQuery"],
    });
  },
});
