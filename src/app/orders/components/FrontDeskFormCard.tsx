import { Button, Card, Form, Input, InputNumber, Select } from "antd";
import React from "react";

const inputMap = {
  TEXT: Input,
  NUMERIC: InputNumber,
  SELECT: Select,
  TEXT_AREA: Input.TextArea,
};
const { Option } = Select;
export const FrontDeskFormCard = ({
  order,
  initialValues,
  onValidated,
  onValidationFailed,
}) => (
  <Card title="Front desk form">
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
                    <Option key={`${option}${i}`} value={option?.value}>
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
);
