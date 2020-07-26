import React from "react";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";

import {
  createOrderReportFormValidated,
  createOrderReportFormValidationFailed,
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
    onFormValidationFailed: (info) => {
      console.log("Validate Failed:", info);
      dispatch(createOrderReportFormValidationFailed({ info }));
    },
  };
};
