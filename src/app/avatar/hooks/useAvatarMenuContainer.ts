import { useDispatch, useSelector } from "react-redux";
import { getAvatarCurrentMenuItemsAsList } from "app/avatar/selectors/getAvatarCurrentMenuItems";
import { menuItemClicked } from "app/avatar/actions";

export const useAvatarMenuContainer = () => {
  const dispatch = useDispatch();
  return {
    avatarMenuItems: useSelector(getAvatarCurrentMenuItemsAsList),
    onItemClick: (item) => {
      dispatch(menuItemClicked(item));
    },
  };
};
