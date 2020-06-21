import React from "react";
import { Breadcrumb, Layout, Typography, List, Card } from "antd";
import { useCatalogContainer } from "./useCatalogContainer";

const { Header, Content } = Layout;
const { Title } = Typography;

export const Catalog = () => {
  const { vendors, loading } = useCatalogContainer();

  return (
    <Layout>
      <Header style={{ background: "#fff", padding: "0 1vw" }}>
        <Title level={3}>Catalog Dashboard</Title>
        <Breadcrumb>
          <Breadcrumb.Item>Catalog</Breadcrumb.Item>
        </Breadcrumb>
      </Header>

      <Content style={{ padding: "1vw" }}>
        <List
          grid={{
            gutter: 8,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 6,
            xxl: 3,
          }}
          loading={loading}
          dataSource={vendors}
          renderItem={(item) => (
            <List.Item>
              <Card title={item?.["name"]}>Card content</Card>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};
