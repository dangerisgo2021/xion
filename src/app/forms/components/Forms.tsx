import React from "react";
import { Button, Layout, Table } from "antd";
import { useFormsContainer } from "app/forms/hooks/useFormsContainer";
import { Header } from "app/layout/components/Header";
import { AddFormModal } from "./AddFormModal";

const { Content } = Layout;

export const Forms = () => {
  const {
    loading,
    tableData,
    columns,
    onAddFormButtonClick,
    onAddFormOkClick,
    onAddFormCancelClick,
    isFormModalVisible,
  } = useFormsContainer();

  //add some handling of null id on form
  return (
    <Layout>
      <Header title="Forms Editor" breadcrumbs={["Forms"]} />
      <Content style={{ padding: "1vw" }}>
        <Button type="primary" onClick={onAddFormButtonClick}>
          Add a form
        </Button>
        <Table
          style={{ padding: "1vw 0" }}
          title={() => <h2>Forms</h2>}
          loading={loading}
          columns={columns}
          dataSource={tableData}
          rowKey="id"
          pagination={{ position: ["topLeft", "bottomLeft"], pageSize: 5 }}
        />
        <AddFormModal
          visible={isFormModalVisible}
          onOk={onAddFormOkClick}
          onCancel={onAddFormCancelClick}
        />
      </Content>
    </Layout>
  );
};
