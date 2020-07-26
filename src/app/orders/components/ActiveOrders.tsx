import React from "react";
import { Layout, Table } from "antd";
import { useActiveOrdersContainer } from "app/orders/hooks/useActiveOrdersContainer";
import { Header } from "app/layout/components/Header";

const { Content } = Layout;

export const ActiveOrders = () => {
  const { orders, loading, columns } = useActiveOrdersContainer();

  return (
    <Layout>
      <Header title="Active Orders" breadcrumbs={["Active Orders"]} />

      <Content style={{ padding: "1vw" }}>
        <Table
          rowKey="id"
          dataSource={orders}
          columns={columns}
          loading={loading}
        />
      </Content>
    </Layout>
  );
};
