import { Form, Input } from "antd";
import React from "react";

export const FormFieldLabel = ({ field }) => {
  return (
    <Form.Item
      name={[field.name, "label"]}
      label="label"
      style={{ margin: ".5vw" }}
      required
      rules={[
        {
          required: true,
          message: "Please input label",
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};
