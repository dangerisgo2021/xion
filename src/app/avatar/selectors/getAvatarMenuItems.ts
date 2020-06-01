import { createSelector } from "reselect";

export const getAvatarMenuItems = (state) => state?.avatar?.menuItems;

export const getAvatarMenuItemsAsList = createSelector(
    getAvatarMenuItems,
  (avatarMenuItems) => (avatarMenuItems ? Object.values(avatarMenuItems) : [])
);
