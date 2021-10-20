import React from "react";
import { Dropdown, Avatar as AntAvatar, Space, Typography, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AvatarMenu } from "app/avatar/components/AvatarMenu";
import { useAvatarContainer } from "app/avatar/hooks/useAvatarContainer";
const { Text } = Typography;

export const Avatar = () => {
  const { userEmail } = useAvatarContainer();

  return (
    <Space style={{ width: "100%", padding: "12px", backgroundColor: "aqua" }}>
      <Dropdown overlay={<AvatarMenu />} trigger={["click"]}>
        <Row align="middle" justify="space-between">
          <AntAvatar size="large" icon={<UserOutlined />} />
          <Text style={{ margin: ".3vw" }}>
            {userEmail
              ? userEmail.slice(0, userEmail.indexOf("@"))
              : "Login Please"}
          </Text>
        </Row>
      </Dropdown>
    </Space>
  );
};
