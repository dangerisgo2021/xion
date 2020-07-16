import { useQuery } from "@apollo/client";
import React from "react";
import { ordersReportQuery } from "./queries/ordersReportQuery";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Created",
    dataIndex: "created",
    key: "created",
  },
  {
    title: "Room Number",
    dataIndex: "roomNumber",
    key: "roomNumber",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
];

const limit = 5;

export const useOrderReportsContainer = () => {
  const { data, error, loading, refetch } = useQuery(ordersReportQuery, {
    variables: { limit, start: 0 },
  });

  return {
    limit,
    columns,

    error,
    loading,
    total: data?.orders?.meta?.total,
    orders: data?.orders?.entries ?? [],
    onPaginationChange: (page, pageSize) => {
      console.log({ page, pageSize });
      refetch({
        limit,
        start: page,
      }).catch(console.error);
    },
  };
};
