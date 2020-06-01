import { useDispatch, useSelector } from "react-redux";
import { getAvatarMenuItemsAsList } from "app/avatar/selectors/getAvatarMenuItems";
import { menuItemClicked } from "app/avatar/actions";
import { useAuth } from "app/auth/useAuth";

export const useAvatarMenuContainer = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return {
    avatarMenuItems: useSelector(getAvatarMenuItemsAsList),
    user,
    onItemClick: (item) => {
      dispatch(menuItemClicked(item));
    },
  };
};
