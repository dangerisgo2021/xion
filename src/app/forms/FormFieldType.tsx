import { Form, Select } from "antd";
import React from "react";

export const FormFieldType = ({ field }) => {
  return (
    <Form.Item
      name={[field.name, "type"]}
      label="type"
      style={{ margin: ".5vw" }}
      required
      rules={[
        {
          required: true,
          message: "Please input type",
        },
      ]}
    >
      <Select style={{ width: "100px" }}>
        {/*get options from query*/}
        <Select.Option value="TEXT">Text</Select.Option>
        <Select.Option value="TEXT_AREA">Text Area</Select.Option>
        <Select.Option value="NUMERIC">Number</Select.Option>
        <Select.Option value="CALENDAR">Calendar</Select.Option>{" "}
        <Select.Option value="SELECT">Select</Select.Option>
      </Select>
    </Form.Item>
  );
};
