import { useAuthStore } from "@/context/useAuthStore";
import useUserAuthenticadhook from "@/hooks/use-user-authenticad";
import { useState } from "react";

export default function useAddBalance() {
  const [open, setOpen] = useState<boolean>(false);

  const { isAuthenticad } = useUserAuthenticadhook();
  const { setUser, user } = useAuthStore();
  const addBalance = (value: number) => {
    if (!isAuthenticad() && user) {
      const userUpdated = user;
      userUpdated.balance = user.balance + value;
      setOpen(false);
      return setUser(userUpdated);
    }

    /* chama api */
  };
  return {
    addBalance,
    open,
    setOpen,
  };
}
