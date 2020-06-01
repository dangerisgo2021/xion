import React from "react";

import { Menu } from "antd";
import { useAvatarMenuContainer } from "app/avatar/useAvatarMenuContainer";

export const AvatarMenu = () => {
  const {
    user = null,
    avatarMenuItems,
    onItemClick,
  } = useAvatarMenuContainer();
  return (
    <Menu>
      {avatarMenuItems.map((avatarMenuItem) => {
        // @ts-ignore
        const { id = "missing", text = "" } = avatarMenuItem;

        return (
          <Menu.Item
            key={id}
            onClick={(e) => {
              console.log({ avatarMenuItem });

              onItemClick && onItemClick(avatarMenuItem);
            }}
          >
            {text}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};
