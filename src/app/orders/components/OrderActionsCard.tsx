import { Button, Card } from "antd";
import React from "react";

export const OrderActionsCard = ({
  order,
  onCompletedClicked,
  onCancelClicked,
}) => (
  <Card
    title="Order Actions"
    bodyStyle={{ padding: 0 }}
    actions={[
      <Button type="primary" onClick={() => onCompletedClicked(order?.id)}>
        Complete
      </Button>,
      <Button type="link" onClick={() => onCancelClicked(order?.id)}>
        Cancel
      </Button>,
    ]}
  />
);
