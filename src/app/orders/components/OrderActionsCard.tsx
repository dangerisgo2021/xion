import { Button, Card } from "antd";
import React from "react";

export const OrderActionsCard = ({
  order,
  completeDisabled,
  onCompletedClicked,
  onCancelClicked,
}) => (
  <Card
    title="Order Actions"
    bodyStyle={{ padding: 0 }}
    actions={[
      <Button
        type="primary"
        disabled={completeDisabled}
        onClick={() => onCompletedClicked(order?.id)}
      >
        Complete
      </Button>,
      <Button type="link" onClick={() => onCancelClicked(order?.id)}>
        Cancel
      </Button>,
    ]}
  />
);
