import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useNavMenuContainer } from "app/nav/hooks/useNavMenuContainer";

export const NavMenu = () => {
  const { navItems = [], onItemClick } = useNavMenuContainer();
  return (
    <Menu>
      {navItems.map(({ id, href, displayText }) => (
        <Menu.Item key={id} onClick={onItemClick}>
          <Link href={href}>
            <a className="nav-text">{displayText}</a>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
