import React from "react";
import { Dropdown, Avatar as AntAvatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AvatarMenu } from "app/avatar/AvatarMenu";

export const Avatar = () => {
  return (
    <Dropdown
      overlay={<AvatarMenu />}
      trigger={["click"]}
    >
      <AntAvatar size="large" icon={<UserOutlined />} />
    </Dropdown>
  );
};
