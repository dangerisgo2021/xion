import { useSelector } from "react-redux";
import { getSession } from "app/auth/selectors/getSession";

export const useContentContainer = () => {
  return {
    hasAuthSession: useSelector(getSession),
  };
};
