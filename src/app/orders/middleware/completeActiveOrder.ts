import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { completeActiveOrderClicked } from "../actions";
import { completeOrderMutation } from "../mutations/completeOrderMutation";

export const completeActiveOrder = createWatcherMiddleware({
  actionType: completeActiveOrderClicked.type,
  postReducer: true,
  execute: async ({ action }) => {
    apolloClient.mutate({
      mutation: completeOrderMutation,
      variables: {
        input: {
          id: action?.payload?.id,
        },
      },
      refetchQueries: ["activeOrdersQuery"],
    });
  },
});
