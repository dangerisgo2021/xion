import React from "react";
import { Form, Checkbox } from "antd";

export const ActiveInput = () => (
  <Form.Item name="active" label="Active" valuePropName="checked">
    <Checkbox />
  </Form.Item>
);
