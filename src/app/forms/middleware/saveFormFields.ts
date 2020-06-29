import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { updateFormMutation } from "app/forms/mutations/updateFormMutation";
import { saveFormValidated } from "../actions";

export const saveFormFields = createWatcherMiddleware({
  actionType: saveFormValidated.type,
  postReducer: true,
  execute: async ({ action }) => {
    apolloClient.mutate({
      mutation: updateFormMutation,
      variables: {
        input: action?.payload,
      },
    });
  },
});
