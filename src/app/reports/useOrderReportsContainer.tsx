import React from "react";
import { Space } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getOrdersReport } from "./selectors/getSelectedCatalogItemToEdit";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (_text, record) => (
      <Space size="middle">
        <Link href={`/order/${record?.id}`}>
          <a>{record?.id?.slice(0, 5)}</a>
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
  {
    title: "Item Id",
    dataIndex: "catalogItemId",
    key: "catalogItemId",
    render: (_text, record) => (
      <Space size="middle">{record?.catalogItemId?.slice(0, 5)}</Space>
    ),
  },
];

const limit = 5;

export const useOrderReportsContainer = () => {
  const ordersReport = useSelector(getOrdersReport) ?? [];
  console.log({ ordersReport });
  return {
    limit,
    columns,
    ordersReport,
  };
};
