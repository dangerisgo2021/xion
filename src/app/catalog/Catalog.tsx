import React from "react";
import {
  Breadcrumb,
  Layout,
  Typography,
  List,
  Card,
  Button,
  Space,
} from "antd";
import { useCatalogContainer } from "./useCatalogContainer";
import Link from "next/link";
import { AddVendorModal } from "./AddVendorModal";

const { Header, Content } = Layout;
const { Title } = Typography;

export const Catalog = () => {
  const {
    gridConfig,
    vendors,
    loading,
    isAddVendorModalVisible,
    onAddVendorOkClick,
    onAddVendorCanceled,
    onAddVendorButtonClick,
  } = useCatalogContainer();

  return (
    <Layout>
      <Header style={{ background: "#fff", padding: "0 1vw" }}>
        <Title level={3}>Catalog Dashboard</Title>
        <Breadcrumb>
          <Breadcrumb.Item>Catalog</Breadcrumb.Item>
        </Breadcrumb>
      </Header>

      <Content style={{ padding: "1vw" }}>
        <Space style={{ margin: " 1vw 0" }}>
          <Button type="primary" onClick={onAddVendorButtonClick}>
            Add Vendor
          </Button>
        </Space>

        <List
          grid={gridConfig}
          loading={loading}
          dataSource={vendors}
          renderItem={(vendor) => (
            <List.Item>
              <Link href={`/catalog/vendor/${vendor?.["id"]}`}>
                <a>
                  <Card title={vendor?.["name"]} hoverable />
                </a>
              </Link>
            </List.Item>
          )}
        />
        <AddVendorModal
          visible={isAddVendorModalVisible}
          onOk={onAddVendorOkClick}
          onCancel={onAddVendorCanceled}
        />
      </Content>
    </Layout>
  );
};
