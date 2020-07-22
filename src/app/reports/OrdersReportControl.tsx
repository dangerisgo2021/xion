import React from "react";
import { Col, Form, DatePicker, Row, Select, Input, Button } from "antd";
import { useOrderReportsControlContainer } from "./useOrderReportsControlContainer";
import moment from "moment";
const { RangePicker } = DatePicker;

export const OrdersReportControl = () => {
  const { vendors, onFormValidated } = useOrderReportsControlContainer();

  return (
    <Form onFinish={onFormValidated}>
      <Row gutter={16}>
        <Col span={16}>
          <Form.Item
            name="completedAtRange"
            label="Completed Date Range"
            required
            rules={[
              {
                required: true,
                message: "Report Time range required",
              },
            ]}
          >
            <RangePicker
              showTime={{
                format: "HH:mm",
                defaultValue: [
                  moment.utc().startOf("day"),
                  moment.utc().endOf("day"),
                ],
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="vendors" label="Vendors">
            <Select mode="multiple" allowClear>
              {vendors.map((vendor) => (
                <Select.Option key={vendor?.id} value={vendor?.id}>
                  {vendor?.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="roomNumber" label="Room Number">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="lastName" label="Last Name">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="firstName" label="First Name">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="currency" label="Currency">
            <Select allowClear>
              <Select.Option value="USD">USD</Select.Option>
              <Select.Option value="CAD">CAD</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Report
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
