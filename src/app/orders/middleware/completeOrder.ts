import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { completeOrderClicked } from "../actions";
import { completeOrderMutation } from "../mutations/completeOrderMutation";

export const completeOrder = createWatcherMiddleware({
  actionType: completeOrderClicked.type,
  postReducer: true,
  execute: async ({ action }) => {
    apolloClient.mutate({
      mutation: completeOrderMutation,
      variables: {
        input: {
          id: action?.payload?.orderId,
        },
      },
      refetchQueries: ["activeOrdersQuery", "orderQuery"],
    });
  },
});
