import React from "react";
import { Breadcrumb, Layout, Table, Typography } from "antd";
import { useActiveOrdersContainer } from "./useActiveOrdersContainer";

const { Header, Content } = Layout;
const { Title } = Typography;

export const ActiveOrders = () => {
  const { orders, loading, columns } = useActiveOrdersContainer();

  return (
    <Layout>
      <Header style={{ background: "#fff", padding: "0 1vw" }}>
        <Title level={3}>Active Orders</Title>
        <Breadcrumb>
          <Breadcrumb.Item>Active Orders</Breadcrumb.Item>
        </Breadcrumb>
      </Header>

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
