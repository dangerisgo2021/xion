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
              style={{
                margin: "0 1vw",
              }}
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
              <Row align="top">
                <Col flex={1}>
                  <Button
                    onClick={() => {
                      remove(field.name);
                    }}
                  >
                    remove
                  </Button>
                </Col>
                <Col flex={2}>
                  <Form.Item
                    name={[field.name, "title"]}
                    label="Title"
                    style={{ margin: ".5vw" }}
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
                    style={{ margin: ".5vw" }}
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
