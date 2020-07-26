import React from "react";
import { Form, InputNumber } from "antd";

export const OrderInput = () => (
  <Form.Item name="order" label="Order">
    <InputNumber />
  </Form.Item>
);
