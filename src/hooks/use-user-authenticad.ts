/* eslint-disable react-hooks/rules-of-hooks */
import { useAuthStore } from "@/context/useAuthStore";

export default function useUserAuthenticadhook() {
  const { user } = useAuthStore();

  const isAuthenticad = () => {
    if (!user?.isLogged) {
      return false;
    }
    return true;
  };

  return {
    isAuthenticad,
  };
}
