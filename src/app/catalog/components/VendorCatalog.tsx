import React from "react";
import { Button, Layout, Space, Table } from "antd";
import { useVendorCatalogContainer } from "app/catalog/containers/useVendorCatalogContainer";
import { Header } from "app/layout/components/Header";
import { AddCatalogItemModal } from "./AddCatalogItemModal";
import { EditCatalogItemModal } from "./EditCatalogItemModal";

const { Content } = Layout;

export const VendorCatalog = () => {
  const {
    vendor,
    columns,
    tableData,
    initialValues,
    isAddCatalogItemModalVisible,
    isEditCatalogItemModalVisible,
    onAddCatalogItemOkClick,
    onAddCatalogItemClick,
    onAddCatalogItemCancelClick,
    onEditCatalogItemOkClick,
    onEditCatalogItemCancelClick,
    onEditFormValidationFailed,
    onEditFormValidated,
  } = useVendorCatalogContainer();

  return (
    <Layout>
      <Header
        title={`${vendor.name} Catalog Items`}
        breadcrumbs={["Catalog", vendor.name]}
      />

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
