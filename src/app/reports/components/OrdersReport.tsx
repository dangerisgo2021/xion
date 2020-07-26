import React from "react";
import { Table } from "antd";
import { useOrderReportsContainer } from "app/reports/hooks/useOrderReportsContainer";

export const OrdersReport = () => {
  const { ordersReport, columns } = useOrderReportsContainer();
  console.log({ ordersReport });
  return (
    <Table
      rowKey="id"
      dataSource={ordersReport}
      columns={columns}
      pagination={{
        position: ["topLeft", "bottomLeft"],
        total: ordersReport?.length,
        showSizeChanger: true,
        showTotal: () => ordersReport?.length,
      }}
    />
  );
};
