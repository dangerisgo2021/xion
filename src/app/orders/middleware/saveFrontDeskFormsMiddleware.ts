import { set } from "lodash";
import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import { saveFrontDeskFormMutation } from "app/orders/mutations/saveFrontDeskFormMutation";
import { frontDeskFormValidated } from "app/orders/actions";

const mapFieldEntry = ([key, value]) => ({
  name: key,
  valueJsonString: JSON.stringify({ value: value }),
});

const mapFormEntry = ([key, value]) => ({
  formId: key,
  fields: Object.entries(value).map(mapFieldEntry),
});

const reduceFormValuesToForms = ({ formValues }) => {
  const formsMap = Object.entries(formValues).reduce((acc, [key, value]) => {
    const [fieldName, formId] = key.split("~~");
    set(acc, `${formId}.${fieldName}`, value);
    return acc;
  }, {});

  return Object.entries(formsMap).map(mapFormEntry);
};

export const saveFrontDeskFormsMiddleware = createWatcherMiddleware({
  actionType: frontDeskFormValidated.type,
  postReducer: true,
  execute: async ({ action }) => {
    const { formValues, orderId } = action?.payload ?? {};
    const forms = reduceFormValuesToForms({ formValues });

    apolloClient.mutate({
      mutation: saveFrontDeskFormMutation,
      variables: {
        input: {
          id: orderId,
          forms,
        },
      },
      refetchQueries: ["orderQuery"],
    });
  },
});
