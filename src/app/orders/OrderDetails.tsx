import React from "react";
import {
  Breadcrumb,
  Layout,
  Typography,
  Skeleton,
  Descriptions,
  Card,
} from "antd";
import { useOrderDetailsContainer } from "./useOrderDetailsContainer";

const { Header, Content } = Layout;
const { Title } = Typography;

export const OrderDetails = () => {
  const { order, loading } = useOrderDetailsContainer();

  return (
    <Layout>
      <Header style={{ background: "#fff", padding: "0 1vw" }}>
        <Title level={3}>Order Details</Title>
        <Breadcrumb>
          <Breadcrumb.Item>Orders</Breadcrumb.Item>
          <Breadcrumb.Item>{order?.id}</Breadcrumb.Item>
        </Breadcrumb>
      </Header>

      <Content style={{ padding: "1vw" }}>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <Card>
              <Descriptions title="Order Details">
                <Descriptions.Item label="Room Number">
                  {order.roomNumber}
                </Descriptions.Item>
                <Descriptions.Item label="Last Name">
                  {order.lastName}
                </Descriptions.Item>
                <Descriptions.Item label="Last Updated at">
                  {order.updated}
                </Descriptions.Item>
                <Descriptions.Item label="Created at">
                  {order.created}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </>
        )}
      </Content>
    </Layout>
  );
};
