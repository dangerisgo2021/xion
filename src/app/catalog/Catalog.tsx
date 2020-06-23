import React from "react";
import { Breadcrumb, Layout, Typography, List, Card } from "antd";
import { useCatalogContainer } from "./useCatalogContainer";
import Link from "next/link";

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
          renderItem={(vendor) => (
            <List.Item>
              <Link href={`/catalog/vendor/${vendor?.["id"]}`}>
                <a>
                  <Card title={vendor?.["name"]} hoverable>
                    Card content
                  </Card>
                </a>
              </Link>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};
