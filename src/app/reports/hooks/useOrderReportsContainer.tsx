import React from "react";
import { Space } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getOrdersReport } from "app/reports/selectors/getSelectedCatalogItemToEdit";
import { DateTime } from "app/atoms/DateTime";

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
    render: (_text, record) => (
      <DateTime dateTime={record?.created} format="MMM DD h:mm A" />
    ),
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
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
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
    render: (_text, record) => (
      <DateTime dateTime={record?.completedAt} format="MMM DD h:mm A" />
    ),
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

  return {
    limit,
    columns,
    ordersReport,
  };
};
