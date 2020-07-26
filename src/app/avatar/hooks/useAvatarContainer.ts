import { useAuth } from "app/auth/hooks/useAuth";

export const useAvatarContainer = () => {
  const { user } = useAuth();
  return {
    user,
  };
};
