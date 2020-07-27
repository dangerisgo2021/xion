import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { assignToMeClicked } from "app/orders/actions";
import { assignOrderMutation } from "app/orders/mutations/assignOrderMutation";

export const assignOrder = createWatcherMiddleware({
  actionType: assignToMeClicked.type,
  postReducer: true,
  execute: async ({ action }) => {
    apolloClient.mutate({
      mutation: assignOrderMutation,
      variables: {
        input: {
          id: action?.payload?.orderId,
        },
      },
      refetchQueries: ["activeOrdersQuery", "orderQuery"],
    });
  },
});
