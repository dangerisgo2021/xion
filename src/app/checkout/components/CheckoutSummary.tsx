import React from "react";
import { Table } from "antd";
import { useCheckoutSummaryContainer } from "app/checkout/hooks/useCheckoutSummaryContainer";

export const CheckoutSummary = () => {
  const { orders, columns, total } = useCheckoutSummaryContainer();

  return (
    <Table
      rowKey="id"
      dataSource={orders}
      columns={columns}
      pagination={{
        position: ["topLeft", "bottomLeft"],
        total,
        showSizeChanger: true,
        showTotal: () => total,
      }}
    />
  );
};
