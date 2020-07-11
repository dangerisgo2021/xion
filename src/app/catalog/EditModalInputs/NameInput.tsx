import React from "react"
import {Form, Input} from "antd";

export const NameInput = () => (
    <Form.Item
        name="name"
        label="Name"
        rules={[
            {
                required: true,
                message: "Name is required",
            },
        ]}
    >
        <Input />
    </Form.Item>
)