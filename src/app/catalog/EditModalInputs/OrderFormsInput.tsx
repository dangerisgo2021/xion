import React from "react";
import { Form, Select } from "antd";
const { Option } = Select;

export const OrderFormsInput = ({ forms }) => (
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
);
