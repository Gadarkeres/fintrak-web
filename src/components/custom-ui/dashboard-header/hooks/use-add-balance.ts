import { useAuthStore } from "@/context/useAuthStore"
import useUserAuthenticadhook from "@/hooks/use-user-authenticad"

export default function useAddBalance() {
  const {isAuthenticad} = useUserAuthenticadhook()
  const {setUser, user} = useAuthStore();
  const addBalance = (value: number) => {
    if(!isAuthenticad() && user){
      const userUpdated = user;
      userUpdated.balance = user.balance + value;
     return setUser(userUpdated)
    }

    /* chama api */ 


  }
  return addBalance;
}