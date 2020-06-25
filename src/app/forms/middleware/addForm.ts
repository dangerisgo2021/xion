import { menuItemClicked } from "app/avatar/actions";
import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { getAuthClient } from "app/auth/AuthProvider";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { addFormMutation } from "app/forms/mutations/addFormMutation";
import { addFormClicked } from "../actions";

export const addForm = createWatcherMiddleware({
  actionType: addFormClicked.type,
  postReducer: true,
  execute: async ({ action }) => {
    apolloClient.mutate({
      mutation: addFormMutation,
    });
  },
});
