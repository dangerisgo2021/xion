import React from "react";

import { Form, Input, InputNumber, Modal, Select } from "antd";
import CheckBox from "rc-checkbox";

const { Option } = Select;

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

        <Form.Item name="active" label="Active" valuePropName="checked">
          <CheckBox />
        </Form.Item>
        <Form.Item name="order" label="Order">
          <InputNumber />
        </Form.Item>
        <Form.Item name={["price", "amount"]} label="Price Amount">
          <InputNumber />
        </Form.Item>

        <Form.Item name={["price", "currency"]} label="Price Currency">
          <Select>
            <Option value="USD">USD</Option>
            <Option value="CAD">CAD</Option>
          </Select>
        </Form.Item>

        <Form.Item name="imageUrl" label="Image Url">
          <Input />
        </Form.Item>
        <Form.Item name="videoUrl" label="Video Url">
          <Input />
        </Form.Item>
        <Form.Item name="shortDescription" label="Short Description">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
