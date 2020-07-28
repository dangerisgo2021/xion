import React from "react";
import { Col, Form, DatePicker, Row, Input, Button } from "antd";
import { useCheckoutControlContainer } from "app/checkout/hooks/useCheckoutControlContainer";
const { RangePicker } = DatePicker;

export const CheckoutControl = () => {
  const { onFormValidated } = useCheckoutControlContainer();

  return (
    <Form
      onFinish={onFormValidated}
    >
      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            name="created"
            label="Date Range"
            required
            rules={[
              {
                required: true,
                message: "Date Range required",
              },
            ]}
          >
            <RangePicker
              showTime={{
                format: "HH:mm",
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="roomNumber"
            label="Room Number"
            required
            rules={[
              {
                required: true,
                message: "Room Number required",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Checkout
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
