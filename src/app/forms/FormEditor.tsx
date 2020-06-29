import React from "react";
import {
  Breadcrumb,
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Layout,
  Row,
  Select,
  Skeleton,
  Typography,
} from "antd";
import { useFormEditorContainer } from "./useFormEditorContainer";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title } = Typography;

//TODO make fields a table
export const FormEditor = () => {
  const {
    loading,
    form,
    onFinish,
    onFinishFailed,
  } = useFormEditorContainer();
  console.log({ form });
  return (
    <Layout>
      <Header style={{ background: "#fff", padding: "0 1vw" }}>
        <Title level={3}>{`Form Editor`}</Title>
        <Breadcrumb>
          <Breadcrumb.Item>Forms</Breadcrumb.Item>
          <Breadcrumb.Item>{form?.name}</Breadcrumb.Item>
        </Breadcrumb>
      </Header>

      <Content style={{ padding: "1vw" }}>
        <Row>
          {loading ? (
            <>
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
            </>
          ) : (
            <Form
              name="editor"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{ name: form?.name, fields: form?.fields ?? [] }}
            >
              <Title level={4}> Form Name </Title>
              <Form.Item
                name={"name"}
                label="Form Name"
                style={{ margin: ".5vw" }}
                required
                rules={[{ required: true, message: "Please input name" }]}
              >
                <Input />
              </Form.Item>
              <Title level={4}> Form Fields </Title>
              <Form.List name="fields">
                {(fields, { add, remove }) => {
                  return (
                    <Col>
                      {fields.map((field) => {
                        return (
                          <Row key={field.key} align="middle">
                            <Form.Item
                              name={[field.name, "name"]}
                              label="name"
                              style={{ margin: ".5vw" }}
                              required
                              rules={[
                                {
                                  required: true,
                                  message: "Please input name",
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item
                              name={[field.name, "label"]}
                              label="label"
                              style={{ margin: ".5vw" }}
                              required
                              rules={[
                                {
                                  required: true,
                                  message: "Please input label",
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item
                              name={[field.name, "order"]}
                              label="order"
                              style={{ margin: ".5vw" }}
                            >
                              <InputNumber min={0} />
                            </Form.Item>
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
                                <Select.Option value="TEXT_AREA">
                                  Text Area
                                </Select.Option>
                                <Select.Option value="NUMERIC">
                                  Number
                                </Select.Option>
                                <Select.Option value="CALENDAR">
                                  Calendar
                                </Select.Option>{" "}
                                <Select.Option value="SELECT">
                                  SELECT
                                </Select.Option>
                              </Select>
                            </Form.Item>
                            <Form.Item
                              name={[field.name, "required"]}
                              valuePropName="checked"
                              style={{ margin: ".5vw" }}
                            >
                              <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item style={{ margin: "0" }}>
                              <Button
                                type="dashed"
                                shape="circle"
                                onClick={() => {
                                  remove(field.name);
                                }}
                                block
                              >
                                <MinusOutlined />
                              </Button>
                            </Form.Item>
                          </Row>
                        );
                      })}
                      <Divider style={{ color: "black" }} />
                      <Row>
                        <Col style={{ margin: ".5vw" }}>
                          <Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => {
                                add();
                              }}
                              block
                            >
                              <PlusOutlined /> Add field
                            </Button>
                          </Form.Item>
                        </Col>
                        <Col style={{ margin: ".5vw" }}>
                          <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                              Save
                            </Button>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>
                  );
                }}
              </Form.List>
            </Form>
          )}
        </Row>
      </Content>
    </Layout>
  );
};
