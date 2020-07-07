import { message } from "antd";
import { pick } from "lodash";
import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { updateFormMutation } from "app/forms/mutations/updateFormMutation";
import { editCatalogItemFormValidated } from "../actions";

export const sendCatalogItemEditOnOk = createWatcherMiddleware({
  actionType: editCatalogItemFormValidated.type,
  postReducer: true,
  execute: async ({ action }) => {
    console.log({ action });
    //   apolloClient
    // .mutate({
    //   mutation: updateFormMutation,
    //   variables: {
    //     input: {
    //       id: action?.payload?.form?.id,
    //       name: action?.payload?.form?.name,
    //       fields: action?.payload?.form?.fields?.map((field) =>
    //         pick(field, [
    //           "label",
    //           "name",
    //           "order",
    //           "required",
    //           "type",
    //           "selectConfig",
    //         ])
    //       ),
    //     },
    //   },
    // })
    // .then(() => {
    //   message.success("Successfully saved");
    // });
  },
});
