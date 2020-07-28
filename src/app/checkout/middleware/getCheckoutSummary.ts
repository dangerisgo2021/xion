import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import {
  checkoutFormValidated,
  receivedCheckoutSummary,
} from "app/checkout/actions";
import { checkoutQuery } from "app/checkout/queries/checkoutQuery";

const mapFormValuesToCheckoutInput = ({ formValues }) => {
  const [start, end] = formValues?.created ?? [];
  const created = formValues?.created ? { start, end } : undefined;
  return {
    limit: 0,
    created,
    roomNumber: formValues?.roomNumber || undefined,
  };
};

export const getCheckoutSummary = createWatcherMiddleware({
  actionType: checkoutFormValidated.type,
  postReducer: true,
  execute: async ({ action, dispatch }) => {
    const input = mapFormValuesToCheckoutInput({
      formValues: action.payload.values,
    });

    apolloClient
      .query({
        query: checkoutQuery,
        variables: {
          input,
        },
      })
      .then(({ data }) => {
        const orders = data?.orders.entries;
        dispatch(receivedCheckoutSummary({ orders }));
      });
  },
});
