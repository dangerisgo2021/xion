import { useDispatch, useSelector } from "react-redux";
import { getAvatarCurrentMenuItemsAsList } from "app/avatar/selectors/getAvatarCurrentMenuItems";
import { menuItemClicked } from "app/avatar/actions";
import { useAuth } from "app/auth/useAuth";

export const useAvatarMenuContainer = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return {
    avatarMenuItems: useSelector(getAvatarCurrentMenuItemsAsList),
    user,
    onItemClick: (item) => {
      dispatch(menuItemClicked(item));
    },
  };
};
