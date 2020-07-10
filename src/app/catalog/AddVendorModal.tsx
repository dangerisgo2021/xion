import React from "react";

import { Form, Input, Modal } from "antd";

export const AddVendorModal = ({
  visible,
  onOk = (_) => {},
  onCancel = () => {},
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Add Vendor"
      okText="Ok"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onOk(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="name">
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name of the vendor",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
