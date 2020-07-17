import { useQuery } from "@apollo/client";
import React from "react";
import { ordersReportQuery } from "./queries/ordersReportQuery";
import { Space } from "antd";
import Link from "next/link";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (_text, record) => (
      <Space size="middle">
        <Link href={`/order/${record?.id}`}>
          <a>{record?.id.slice(0, 5)}</a>
        </Link>
      </Space>
    ),
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
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
  },
  {
    title: "Completed",
    dataIndex: "completedAt",
    key: "completedAt",
  },
  {
    title: "Transaction Id",
    dataIndex: "transactionId",
    key: "transactionId",
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
    onPaginationChange: (page) => {
      refetch({
        limit,
        start: page,
      }).catch(console.error);
    },
  };
};
