import React from "react";
import {
  Breadcrumb,
  Layout,
  Typography,
  Skeleton,
  Descriptions,
  Card,
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Row,
  Col,
} from "antd";
import { useOrderDetailsContainer } from "./useOrderDetailsContainer";
const { Option } = Select;

const { Header, Content } = Layout;
const { Title } = Typography;

const inputMap = {
  TEXT: Input,
  NUMERIC: InputNumber,
  SELECT: Select,
  TEXT_AREA: Input.TextArea,
};

export const OrderDetails = () => {
  const {
    order,
    loading,
    initialValues,
    onValidated,
    onValidationFailed,
  } = useOrderDetailsContainer();

  return (
    <Layout>
      <Header style={{ background: "#fff", padding: "0 1vw" }}>
        <Title level={3}>Order Details</Title>
        <Breadcrumb>
          <Breadcrumb.Item>Orders</Breadcrumb.Item>
          <Breadcrumb.Item>{order?.id}</Breadcrumb.Item>
        </Breadcrumb>
      </Header>

      <Content style={{ padding: "1vw" }}>
        {loading ? (
          <Skeleton />
        ) : (
          <Row gutter={[16, 16]}>
            <Col span={16}>
              <Card>
                <Descriptions title="Order Details">
                  <Descriptions.Item label="Room Number">
                    {order.roomNumber}
                  </Descriptions.Item>
                  <Descriptions.Item label="Last Name">
                    {order.lastName}
                  </Descriptions.Item>
                  <Descriptions.Item label="Last Updated at">
                    {order.updated}
                  </Descriptions.Item>
                  <Descriptions.Item label="Created at">
                    {order.created}
                  </Descriptions.Item>
                  <Descriptions.Item label="Item Name">
                    {order?.catalogItem?.name}
                  </Descriptions.Item>
                  <Descriptions.Item
                    label={`Price (${order?.catalogItem?.price?.currency})`}
                  >
                    {order?.catalogItem?.price?.amount}
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Form
                  layout="vertical"
                  name="frontDeskForm"
                  onFinish={onValidated}
                  onFinishFailed={onValidationFailed}
                  initialValues={initialValues}
                >
                  {order?.catalogItem?.frontDeskForms?.map(({ fields, id }) =>
                    fields?.map((field) => {
                      const FieldInput = inputMap[field.type];
                      return (
                        <Form.Item
                          key={field.name + id}
                          {...{
                            label: field?.label,
                            name: `${field?.name}~~${id}`,
                            ...(field?.required
                              ? {
                                  rules: [
                                    {
                                      required: true,
                                      message: `${field?.label} required`,
                                    },
                                  ],
                                }
                              : {}),
                          }}
                        >
                          {field?.type === "SELECT" ? (
                            <FieldInput>
                              {field?.selectConfig?.options.map((option, i) => (
                                <Option
                                  key={`${option}${i}`}
                                  value={option?.value}
                                >
                                  {option?.text}
                                </Option>
                              ))}
                            </FieldInput>
                          ) : (
                            <FieldInput />
                          )}
                        </Form.Item>
                      );
                    })
                  )}
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Save
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        )}
      </Content>
    </Layout>
  );
};
