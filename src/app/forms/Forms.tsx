import React from "react";
import { Breadcrumb, Button, Layout, Table, Typography } from "antd";

import { useFormsContainer } from "./useFormsContainer";
import { AddFormModal } from "./AddFormModal";

const { Header, Content } = Layout;
const { Title } = Typography;

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
      <Header style={{ background: "#fff", padding: "0 1vw" }}>
        <Title level={3}>Forms Editor</Title>
        <Breadcrumb>
          <Breadcrumb.Item>Forms</Breadcrumb.Item>
        </Breadcrumb>
      </Header>

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
