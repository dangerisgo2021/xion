import React from "react";
import {
  Layout,
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
import { Header } from "app/layout/components/Header";
import { useOrderDetailsContainer } from "app/orders/hooks/useOrderDetailsContainer";

const { Option } = Select;
const { Content } = Layout;

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
    onCancelClicked,
    onCompletedClicked,
  } = useOrderDetailsContainer();

  return (
    <Layout>
      <Header
        title="Order Details"
        breadcrumbs={["Orders", ...(order?.id ? [order?.id] : [])]}
      />
      <Content style={{ padding: "1vw" }}>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <Row gutter={[16, 16]}>
              <Col span={16}>
                <Card>
                  <Descriptions title="Order Details">
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
                    <Descriptions.Item label="Completed">
                      {order?.completedAt}
                    </Descriptions.Item>
                    <Descriptions.Item label="Canceled">
                      {order?.canceled ? "Yes" : "No"}
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
                <Card
                  title="Order Actions"
                  bodyStyle={{ padding: 0 }}
                  actions={[
                    <Button
                      type="primary"
                      onClick={() => onCompletedClicked(order?.id)}
                    >
                      Complete
                    </Button>,
                    <Button
                      type="link"
                      onClick={() => onCancelClicked(order?.id)}
                    >
                      Cancel
                    </Button>,
                  ]}
                />
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
                                {field?.selectConfig?.options.map(
                                  (option, i) => (
                                    <Option
                                      key={`${option}${i}`}
                                      value={option?.value}
                                    >
                                      {option?.text}
                                    </Option>
                                  )
                                )}
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
          </>
        )}
      </Content>
    </Layout>
  );
};
