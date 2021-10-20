import {useSelector} from "react-redux";
import {getSessionUserEmail} from "app/auth/selectors/getSessionUserEmail";

export const useAvatarContainer = () => {
  return {
    userEmail: useSelector(getSessionUserEmail)
  };
};
