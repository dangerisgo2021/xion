import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { addFormMutation } from "app/forms/mutations/addFormMutation";
import { addFormOkClicked } from "../actions";
import { pick } from "lodash";

export const addForm = createWatcherMiddleware({
  actionType: addFormOkClicked.type,
  postReducer: true,
  execute: async ({ action }) => {
    apolloClient.mutate({
      mutation: addFormMutation,
      variables: {
        ...pick(action.payload, ["name"]),
        limit: 10,
      },
      refetchQueries: ["formsQuery"],
    });
  },
});
