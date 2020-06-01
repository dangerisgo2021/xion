import { createSelector } from "reselect";

export const getNavMenuItems = (state) => state?.nav?.items;

export const getNavMenuItemsAsList = createSelector(
  getNavMenuItems,
  (navMenuItems) => (navMenuItems ? Object.values(navMenuItems) : [])
);
