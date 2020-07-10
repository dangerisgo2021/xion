import React from "react";

import { Form, Input, InputNumber, Modal, Select } from "antd";
import CheckBox from "rc-checkbox";
import { useEditCatalogItemModalContainer } from "./useEditCatalogItemModalContainer";

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
  const { forms } = useEditCatalogItemModalContainer();

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
        const formFields = { ...form.getFieldsValue() }; //not sure why I am losing multi select values when validating
        form
          .validateFields()
          .then((_values) => {
            onValidated(formFields); //values is missing orderForm values so passing formValues before validation
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

        {forms && (
          <Form.Item name="orderForms" label="Order Forms">
            <Select mode="multiple">
              {forms.map((form) => {
                return (
                  <Option key={form.id} value={form.id}>
                    {form.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        )}

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
