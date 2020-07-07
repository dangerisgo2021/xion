import React from "react";
import { Breadcrumb, Button, Layout, Space, Table, Typography } from "antd";
import { useVendorCatalogContainer } from "./useVendorCatalogContainer";
import { AddCatalogItemModal } from "./AddCatalogItemModal";
import { EditCatalogItemModal } from "./EditCatalogItemModal";

const { Header, Content } = Layout;
const { Title } = Typography;
export const VendorCatalog = () => {
  const {
    columns,
    tableData,
    vendor,
    catalogItems,
    isAddCatalogItemModalVisible,
    isEditCatalogItemModalVisible,
    selectedCatalogItemToEdit,
    onAddCatalogItemOkClick,
    onAddCatalogItemClick,
    onAddCatalogItemCancelClick,
    onEditCatalogItemOkClick,
    onEditCatalogItemCancelClick,
    onEditFormValidationFailed,
    onEditFormValidated,
  } = useVendorCatalogContainer();

  const initialValues = catalogItems.find(
    ({ id }) => id === selectedCatalogItemToEdit
  );

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
        <Space style={{ marginBottom: ".5em" }}>
          <Button type="primary" onClick={onAddCatalogItemClick}>
            Add Catalog Item
          </Button>
        </Space>
        <Table columns={columns} dataSource={tableData} />
        <AddCatalogItemModal
          visible={isAddCatalogItemModalVisible}
          onOk={onAddCatalogItemOkClick}
          onCancel={onAddCatalogItemCancelClick}
        />
        <EditCatalogItemModal
          initialValues={initialValues}
          visible={isEditCatalogItemModalVisible}
          onOk={onEditCatalogItemOkClick}
          onCancel={onEditCatalogItemCancelClick}
          onValidated={onEditFormValidated}
          onValidationFailed={onEditFormValidationFailed}
        />
      </Content>
    </Layout>
  );
};
