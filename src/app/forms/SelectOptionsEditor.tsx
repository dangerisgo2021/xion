import { Button, Card, Col, Form, Input, Row } from "antd";
import React from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

export const SelectOptionsEditor = ({ field }) => {

  return (
    <Form.List name={[field.name, "selectConfig", "options"]}>
      {(selectOptions, { add, remove }) => {
        return (
          <Col>
            <Card title="Select Config">
              <Card
                title="Options"
                actions={[
                  <Button
                    onClick={() => {
                      add(field.name);
                    }}
                  >
                    Add Option
                    <PlusOutlined />
                  </Button>,
                ]}
              >
                {selectOptions.map((selectOption) => (
                  <Row justify="space-around" key={selectOption.name}>
                    <Form.Item
                      name={[selectOption.name, "value"]}
                      label="Value"
                    >
                      <Input placeholder="Enter Option Value" />
                    </Form.Item>
                    <Form.Item name={[selectOption.name, "text"]} label="Text">
                      <Input placeholder="Display Text" />
                    </Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        remove(field.name);
                      }}
                    >
                      <MinusOutlined />
                    </Button>
                  </Row>
                ))}
              </Card>
            </Card>
          </Col>
        );
      }}
    </Form.List>
  );
};
