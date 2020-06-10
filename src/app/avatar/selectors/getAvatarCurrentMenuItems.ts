import { createSelector } from "reselect";

export const getAvatarCurrentMenuItems = (state) =>
  state?.avatar?.currentMenuItems;

export const getAvatarCurrentMenuItemsAsList = createSelector(
  getAvatarCurrentMenuItems,
  (avatarCurrentMenuItems) =>
    avatarCurrentMenuItems ? Object.values(avatarCurrentMenuItems) : []
);
