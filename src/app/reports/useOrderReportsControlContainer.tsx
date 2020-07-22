import React from "react";
import { useQuery } from "@apollo/client";
import { ordersReportControlQuery } from "./queries/ordersReportControlQuery";
import { useDispatch } from "react-redux";
import {
  createOrderReportFormValidated,
  createOrderReportFormValidationFailed,
} from "./actions";

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
