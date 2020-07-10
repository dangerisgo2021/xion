import { useQuery } from "@apollo/client";
import { Button, Space } from "antd";
import React from "react";
import { activeOrdersQuery } from "./queries/activeOrdersQuery";
import { useDispatch } from "react-redux";
import {
  completeActiveOrderClicked,
  cancelActiveOrderClicked,
} from "./actions";

export const useActiveOrdersContainer = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useQuery(activeOrdersQuery, {
    variables: { limit: 0 },
  });
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
      render: (_text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              dispatch(completeActiveOrderClicked({ id: record?.id }));
            }}
          >
            Complete
          </Button>
          <Button
            type="link"
            onClick={() => {
              dispatch(cancelActiveOrderClicked({ id: record?.id }));
            }}
          >
            Cancel
          </Button>
        </Space>
      ),
    },
  ];
  return {
    columns,
    orders: data?.orders?.entries ?? [],
    error,
    loading,
  };
};
