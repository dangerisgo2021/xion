import React from "react";
import { Dropdown, Avatar as AntAvatar, Space, Typography, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AvatarMenu } from "app/avatar/AvatarMenu";
import { useAvatarContainer } from "./useAvatarContainer";
const { Text } = Typography;

export const Avatar = () => {
  const { user } = useAvatarContainer();
  return (
    <Space style={{ width: "100%", padding: "12px", backgroundColor: "aqua" }}>
      <Dropdown overlay={<AvatarMenu />} trigger={["click"]}>
        <Row align="middle" justify="space-between">
          {user?.picture ? (
            <AntAvatar size="large" src={user?.picture} />
          ) : (
            <AntAvatar size="large" icon={<UserOutlined />} />
          )}
          <Text style={{ margin: ".3vw" }}>{user?.nickname || "Login"}</Text>
        </Row>
      </Dropdown>
    </Space>
  );
};
