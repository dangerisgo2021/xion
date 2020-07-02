import { useQuery } from "@apollo/client";
import { Button, Space } from "antd";
import React from "react";
import { activeOrdersQuery } from "./queries/activeOrdersQuery";

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
  {
    title: "Action",
    key: "action",
    render: (_text, _record) => (
      <Space size="middle">
        <Button type="primary">Complete</Button>
        <Button type="link">Cancel</Button>
      </Space>
    ),
  },
];
export const useActiveOrdersContainer = () => {
  const { data, error, loading } = useQuery(activeOrdersQuery, {
    variables: { limit: 0 },
  });

  return {
    columns,
    orders: data?.orders?.entries ?? [],
    error,
    loading,
  };
};
