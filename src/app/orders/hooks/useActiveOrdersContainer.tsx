import { useQuery, useSubscription } from "@apollo/client";
import { Button, Space } from "antd";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { DateTime } from "app/atoms/DateTime";
import { LinkToDetails } from "app/orders/components/LinkToDetails";
import { activeOrdersQuery } from "app/orders/queries/activeOrdersQuery";
import { ordersSubscription } from "app/orders/subscriptions/ordersSubscription";
import { assignToMeClicked } from "../actions";

export const useActiveOrdersContainer = () => {
  const dispatch = useDispatch();
  const { data, error, loading, refetch } = useQuery(activeOrdersQuery, {
    variables: { limit: 0 },
  });

  const { data: activeOrderUpdated } = useSubscription(ordersSubscription);

  React.useEffect(() => {
    if (activeOrderUpdated) {
      refetch().catch(console.error);
    }
  }, [activeOrderUpdated]);
  const columns = [
    {
      title: "Assignee",
      dataIndex: "assignee",
      key: "assignee",
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (_text, record) => <LinkToDetails id={record?.id} />,
    },
    {
      title: "Last Update At",
      dataIndex: "updated",
      key: "updated",
      render: (_text, record) => (
        <DateTime dateTime={record?.updated} format="MMM DD h:mm A" />
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
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
    },
    {
      title: "Room Number",
      dataIndex: "roomNumber",
      key: "roomNumber",
    },
    {
      title: "Name",
      key: "name",
      render: (_text, record) =>
        `${record?.firstName ?? ""} ${record?.lastName ?? ""}`,
    },
    {
      title: "Actions",
      key: "action",
      render: (_text, record) => (
        <Space size="middle">
          <Button type="primary">
            <Link href={`/order/${record?.id}`}>
              <a>Update</a>
            </Link>
          </Button>
          <Button
            type="dashed"
            onClick={() => {
              dispatch(assignToMeClicked({ orderId: record?.id }));
            }}
          >
            Assign to Me
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
