import { useAuth } from "app/auth/useAuth";

export const useAvatarContainer = () => {
  const { user } = useAuth();
  return {
    user,
  };
};
