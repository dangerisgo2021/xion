import React from "react";
import { Form, Input } from "antd";

const { TextArea } = Input;

export const ShortDescriptionInput = () => (
  <Form.Item name="shortDescription" label="Short Description">
    <TextArea />
  </Form.Item>
);
