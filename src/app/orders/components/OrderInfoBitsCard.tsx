import { Card, Descriptions } from "antd";
import React from "react";
import { Currency } from "app/atoms/Currency";

export const OrderInfoBitsCard = ({ order }) => (
  <Card>
    <Descriptions title="Order Details">
      <Descriptions.Item label="Last Name">{order.lastName}</Descriptions.Item>
      <Descriptions.Item label="Last Updated at">
        {order.updated}
      </Descriptions.Item>
      <Descriptions.Item label="Created at">{order.created}</Descriptions.Item>
      <Descriptions.Item label="Item Name">
        {order?.catalogItem?.name}
      </Descriptions.Item>
      {order?.catalogItem?.price?.currency && (
        <Descriptions.Item
          label={`Price (${order?.catalogItem?.price?.currency})`}
        >
          <Currency
            country="CA"
            language="en"
            amount={order?.catalogItem?.price?.amount}
            currency={order?.catalogItem?.price?.currency}
          />
        </Descriptions.Item>
      )}
      <Descriptions.Item label="Completed">
        {order?.completedAt}
      </Descriptions.Item>
      <Descriptions.Item label="Canceled">
        {order?.canceled ? "Yes" : "No"}
      </Descriptions.Item>
    </Descriptions>
  </Card>
);
