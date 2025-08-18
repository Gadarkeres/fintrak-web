import { useAuthStore } from "@/context/useAuthStore";

export default function useUserAuthenticadhook() {
  const { user } = useAuthStore();

  const isAuthenticad = () => {
    if (!user?.isLoggedIn) {
      return false;
    }
    return true;
  };

  return {
    isAuthenticad,
  };
}
