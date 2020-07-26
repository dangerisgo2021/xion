import React from "react";

import { Button, Card, Col, Form, Input, Row } from "antd";

const { TextArea } = Input;

export const AdditionalDetailsInput = () => (
  <Form.List name="additionalDetails">
    {(fields, { add, remove }) => {
      return (
        <Card
          title="Additional Details"
          actions={[
            <Button
              type="primary"
              onClick={() => {
                add();
              }}
            >
              Add Additional Detail
            </Button>,
          ]}
        >
          {fields.map((field) => {
            return (
              <Row align="top" gutter={16}>
                <Col flex={1}>
                  <Form.Item label="Remove">
                    <Button
                      onClick={() => {
                        remove(field.name);
                      }}
                    >
                      -
                    </Button>
                  </Form.Item>
                </Col>
                <Col flex={2}>
                  <Form.Item
                    name={[field.name, "title"]}
                    label="Title"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please input title",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col flex={5}>
                  <Form.Item
                    name={[field.name, "html"]}
                    label="html"
                    rules={[
                      {
                        required: true,
                        message: "Please input html",
                      },
                    ]}
                  >
                    <TextArea />
                  </Form.Item>
                </Col>
              </Row>
            );
          })}
        </Card>
      );
    }}
  </Form.List>
);
