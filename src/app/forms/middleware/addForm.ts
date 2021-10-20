import { pick } from "lodash";

import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "services/gateway/graphql/initGraphqlClient";
import { addFormMutation } from "app/forms/mutations/addFormMutation";
import { addFormOkClicked } from "app/forms/actions";

export const addForm = createWatcherMiddleware({
  actionType: addFormOkClicked.type,
  postReducer: true,
  execute: async ({ action }) => {
    apolloClient.mutate({
      mutation: addFormMutation,
      variables: {
        ...pick(action.payload, ["name"]),
      },
      refetchQueries: ["formsQuery"],
    });
  },
});
