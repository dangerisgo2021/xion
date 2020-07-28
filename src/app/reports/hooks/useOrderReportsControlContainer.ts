import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";

import {
  createOrderReportFormValidated,
} from "app/reports/actions";
import { ordersReportControlQuery } from "app/reports/queries/ordersReportControlQuery";

export const useOrderReportsControlContainer = () => {
  const dispatch = useDispatch();
  const { data } = useQuery(ordersReportControlQuery);

  return {
    vendors: data?.vendors?.entries ?? [],
    onFormValidated: (values) => {
      dispatch(createOrderReportFormValidated({ values }));
    },
  };
};
