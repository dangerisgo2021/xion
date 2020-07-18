import React from "react";

import { Button, Card, Col, Form, Input, Row } from "antd";

const { TextArea } = Input;

export const SocialMediaLinksInput = () => (
  <Form.List name="socialMediaLinks">
    {(fields, { add, remove }) => {
      return (
        <Card
          title="Social Media Links"
          actions={[
            <Button
              type="primary"
              onClick={() => {
                add();
              }}
            >
              Add Social Media Link
            </Button>,
          ]}
        >
          {fields.map((field) => {
            return (
              <Row align="top" gutter={16}>
                <Col>
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
                <Col>
                  <Form.Item
                    name={[field.name, "color"]}
                    label="Color"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please input color",
                      },
                    ]}
                  >
                    <Input />
                    {/*<CompactPicker />*/}
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name={[field.name, "text"]}
                    label="text"
                    rules={[
                      {
                        required: true,
                        message: "Please input text",
                      },
                    ]}
                  >
                    <TextArea />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name={[field.name, "link"]}
                    label="Link"
                    rules={[
                      {
                        required: true,
                        message: "Please input link",
                      },
                    ]}
                  >
                    <TextArea />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name={[field.name, "icon"]}
                    label="icon"
                    rules={[
                      {
                        required: true,
                        message: "Please input icon",
                      },
                    ]}
                  >
                    <Input />
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
