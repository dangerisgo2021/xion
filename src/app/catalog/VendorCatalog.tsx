import React from "react";
import { Breadcrumb, Layout, Table, Typography } from "antd";
import { useVendorCatalogContainer } from "./useVendorCatalogContainer";

const { Header, Content } = Layout;
const { Title } = Typography;
export const VendorCatalog = () => {
  const { columns, tableData, vendor } = useVendorCatalogContainer();

  return (
    <Layout>
      <Header style={{ background: "#fff", padding: "0 1vw" }}>
        <Title level={3}>{`${vendor.name} Catalog Items`}</Title>
        <Breadcrumb>
          <Breadcrumb.Item>Catalog</Breadcrumb.Item>
          <Breadcrumb.Item>{vendor.name}</Breadcrumb.Item>
        </Breadcrumb>
      </Header>

      <Content style={{ padding: "1vw" }}>
        <Table columns={columns} dataSource={tableData} />
      </Content>
    </Layout>
  );
};
