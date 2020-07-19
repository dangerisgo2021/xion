import React from "react";
import {
  Col,
  Form,
  DatePicker,
  TimePicker,
  Row,
  Select,
  Input,
  Button,
} from "antd";
import { useOrderReportsControlContainer } from "./useOrderReportsControlContainer";
const { RangePicker } = DatePicker;

export const OrdersReportControl = () => {
  const { vendors } = useOrderReportsControlContainer();

  return (
    <Form>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="completedDateRange" label="Completed Date Range">
            <RangePicker />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="startTime" label="Start Time">
            <TimePicker />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="endTime" label="End Time">
            <TimePicker />
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
