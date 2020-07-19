import React from "react";
import { useQuery } from "@apollo/client";
import { ordersReportControlQuery } from "./queries/ordersReportControlQuery";

export const useOrderReportsControlContainer = () => {
  const { data } = useQuery(ordersReportControlQuery);

  return {
    vendors: data?.vendors?.entries ?? []
  };
};
