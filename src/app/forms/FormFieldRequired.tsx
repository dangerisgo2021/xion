import { Checkbox, Form } from "antd";
import React from "react";

export const FormFieldRequired = ({ field }) => {
  return (
    <Form.Item
      name={[field.name, "required"]}
      valuePropName="checked"
      style={{ margin: ".5vw" }}
    >
      <Checkbox>Required</Checkbox>
    </Form.Item>
  );
};
