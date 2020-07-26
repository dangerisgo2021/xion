import { createWatcherMiddleware } from "app/state/utils/factories/createWatcherMiddleware";
import { apolloClient } from "app/gateway/graphql/initGraphqlClient";
import {
  createOrderReportFormValidated,
  receivedOrdersReport,
} from "app/reports/actions";
import { ordersReportQuery } from "app/reports/queries/ordersReportQuery";

const mapFormValuesToOrdersReportInput = ({ formValues }) => {
  const [start, end] = formValues?.completedAtRange ?? [];
  const completedAtRange = formValues?.completedAtRange
    ? { start, end }
    : undefined;
  return {
    completedAtRange,
    roomNumber: formValues?.roomNumber || undefined,
    lastName: formValues?.lastName || undefined,
    firstName: formValues?.firstName || undefined,
    currency: formValues?.currency || undefined,
  };
};

export const createOrderReport = createWatcherMiddleware({
  actionType: createOrderReportFormValidated.type,
  postReducer: true,
  execute: async ({ action, dispatch }) => {
    const input = mapFormValuesToOrdersReportInput({
      formValues: action.payload.values,
    });
    apolloClient
      .query({
        query: ordersReportQuery,
        variables: {
          input,
        },
      })
      .then(({ data }) => {
        const ordersReport = data?.reports.ordersReport;
        dispatch(receivedOrdersReport(ordersReport));
      });
  },
});
