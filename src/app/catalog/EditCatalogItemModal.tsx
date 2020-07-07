import React from "react";

import { Form, Input, Modal } from "antd";

export const EditCatalogItemModal = ({
  initialValues,
  visible,
  onOk,
  onCancel = () => {},
  onValidated,
  onValidationFailed,
}) => {
  const [form] = Form.useForm();
  React.useEffect(() => {
    if (initialValues) {
      form.resetFields();
    }
  }, [initialValues]);
  return (
    <Modal
      visible={visible}
      title="Edit Catalog Item"
      okText="Ok"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        onOk();
        form
          .validateFields()
          .then((values) => {
            onValidated(values);
            form.resetFields();
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
            onValidationFailed(info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="name"
        initialValues={initialValues}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Name is required",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
