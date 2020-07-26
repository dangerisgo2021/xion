import React from "react";
import { startCase } from "lodash";
import { Form, Select } from "antd";
const { Option } = Select;

export const TagsInput = ({ tags }) => (
  <Form.Item name="tags" label="Tag">
    <Select mode="multiple">
      {!tags
        ? null
        : tags.map((tag) => {
            return (
              <Option key={tag} value={tag}>
                {startCase(tag)}
              </Option>
            );
          })}
    </Select>
  </Form.Item>
);
