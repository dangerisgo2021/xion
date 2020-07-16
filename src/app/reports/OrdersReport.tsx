import React from "react";
import { Table } from "antd";
import { useOrderReportsContainer } from "./useOrderReportsContainer";

export const OrdersReport = () => {
  const { orders, loading, columns, limit, total, onPaginationChange } = useOrderReportsContainer();

  return (
    <Table
      rowKey="id"
      dataSource={orders}
      columns={columns}
      loading={loading}
      pagination={{
        position: ["topLeft", "bottomLeft"],
        pageSize: limit,
        total,
          onChange: onPaginationChange
      }}
    />
  );
};
