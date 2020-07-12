import React from "react";
import { Form, Select } from "antd";
const { Option } = Select;

export const FrontDeskFormsInput = ({ forms }) => (
  <Form.Item name="frontDeskForms" label="Front Desk Forms">
    <Select mode="multiple">
      {!forms
        ? null
        : forms.map((form) => {
            return (
              <Option key={form.id} value={form.id}>
                {form.name}
              </Option>
            );
          })}
    </Select>
  </Form.Item>
);
