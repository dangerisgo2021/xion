import { useQuery, useSubscription } from "@apollo/client";
import { Button, Space } from "antd";
import Link from "next/link";
import React from "react";
import {DateTime} from "app/atoms/DateTime";
import { LinkToDetails } from "app/orders/components/LinkToDetails";
import { activeOrdersQuery } from "app/orders/queries/activeOrdersQuery";
import { ordersSubscription } from "app/orders/subscriptions/ordersSubscription";

export const useActiveOrdersContainer = () => {
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
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (_text, record) => <LinkToDetails id={record?.id} />,
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
      render: (_text, record) => <DateTime dateTime={record?.created} format="MMM DD h:mm A"/>,

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
      title: "Action",
      key: "action",
      render: (_text, record) => (
        <Space size="middle">
          <Button type="primary">
            <Link href={`/order/${record?.id}`}>
              <a>Update</a>
            </Link>
          </Button>
          <Button type="dashed">Assign to Me</Button>
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
