import { useSelector } from "react-redux";
import { Space } from "antd";
import Link from "next/link";
import { DateTime } from "app/atoms/DateTime";
import React from "react";
import { getCheckoutOrders } from "app/checkout/selectors/getSelectedCatalogItemToEdit";

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
    dataIndex: "completed",
    key: "completed",
    render: (_text, record) => (
      <Space>{record?.completed ? "Yes" : "No"}</Space>
    ),
  },
  {
    title: "Canceled",
    dataIndex: "canceled",
    key: "canceled",
    render: (_text, record) => <Space>{record?.canceled ? "Yes" : "No"}</Space>,
  },
  {
    title: "Transaction Id",
    dataIndex: "transactionId",
    key: "transactionId",
  },
  {
    title: "Item Name",
    dataIndex: ["catalogItem", "name"],
  },
  {
    title: "List Price Amount",
    dataIndex: ["catalogItem", "price", "amount"],
  },
  {
    title: "List Price Currency",
    dataIndex: ["catalogItem", "price", "currency"],
  },
];

export const useCheckoutSummaryContainer = () => {
  const orders = useSelector(getCheckoutOrders) || [];
  return {
    columns,
    orders,
    total: orders?.length,
  };
};
