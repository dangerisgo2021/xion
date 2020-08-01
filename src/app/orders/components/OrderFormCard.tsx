import { Card, Collapse } from "antd";
import React from "react";

export const OrderFormCard = ({ order }) => (
  <Card title="Order Forms">
    <Collapse>
      {order?.formSubmissions.map((formSubmission) => (
        <Collapse.Panel
          header={formSubmission?.formName}
          key={formSubmission?.formId}
        >
          <Collapse>
            {formSubmission?.fields.map((field) => (
              <Collapse.Panel
                header={field?.name}
                key={`${formSubmission?.formId}-${field?.name}`}
              >
                {field?.valueJsonString}
              </Collapse.Panel>
            ))}
          </Collapse>
        </Collapse.Panel>
      ))}
    </Collapse>
  </Card>
);
