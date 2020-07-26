import { useDispatch, useSelector } from "react-redux";
import { getNavMenuItemsAsList } from "app/nav/selectors/getNavMenuItems";
import { navMenuItemClicked } from "app/nav/actions";

export const useNavMenuContainer = () => {
  const dispatch = useDispatch();
  return {
    navItems: useSelector(getNavMenuItemsAsList),
    onItemClick: () => {
      dispatch(navMenuItemClicked());
    },
  };
};
