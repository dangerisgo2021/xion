import React from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  Row,
  Skeleton,
  Typography,
} from "antd";
import { useFormEditorContainer } from "./useFormEditorContainer";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { FormFieldName } from "./FormFieldName";
import { FormFieldLabel } from "./FormFieldLabel";
import { FormFieldOrder } from "./FormFieldOrder";
import { FormFieldType } from "./FormFieldType";
import { FormFieldRequired } from "./FormFieldRequired";
import { SelectOptionsEditor } from "./SelectOptionsEditor";
import { Header } from "app/layout/Header";

const { Title } = Typography;
const { Content } = Layout;

//TODO make fields a table
export const FormEditor = () => {
  const { loading, form, onFinish, onFinishFailed } = useFormEditorContainer();
  return (
    <Layout>
      <Header
        title="Form Editor"
        breadcrumbs={["Forms", ...(form?.name ? [form?.name] : [])]}
      />

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
                        const formField = form?.fields?.[field.name];
                        return (
                          <Card
                            key={field.key}
                            actions={[
                              <Button
                                type="dashed"
                                onClick={() => {
                                  remove(field.name);
                                }}
                              >
                                Remove <MinusOutlined />
                              </Button>,
                            ]}
                          >
                            <Row align="middle" justify="space-between">
                              <FormFieldName field={field} />
                              <FormFieldLabel field={field} />
                              <FormFieldOrder field={field} />
                              <FormFieldType field={field} />
                              <FormFieldRequired field={field} />
                            </Row>
                            {formField?.type === "SELECT" && (
                              <SelectOptionsEditor field={field} />
                            )}
                          </Card>
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
