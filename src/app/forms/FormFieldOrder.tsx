import { Form, InputNumber } from "antd";
import React from "react";

export const FormFieldOrder = ({ field }) => {
  return (
    <Form.Item
      name={[field.name, "order"]}
      label="order"
      style={{ margin: ".5vw" }}
    >
      <InputNumber min={0} />
    </Form.Item>
  );
};
