import { Form, Input } from "antd";
import React from "react";

export const FormFieldName = ({ field }) => {
  return (
    <Form.Item
      name={[field.name, "name"]}
      label="name"
      style={{ margin: ".5vw" }}
      required
      rules={[
        {
          required: true,
          message: "Please input name",
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};
