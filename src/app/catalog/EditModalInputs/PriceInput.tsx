import React from "react";
import { Form, InputNumber, Select } from "antd";
const { Option } = Select;

export const PriceInput = () => (
  <>
    <Form.Item name={["price", "amount"]} label="Price Amount">
      <InputNumber />
    </Form.Item>

    <Form.Item name={["price", "currency"]} label="Price Currency">
      <Select>
        <Option value="USD">USD</Option>
        <Option value="CAD">CAD</Option>
      </Select>
    </Form.Item>
  </>
);
