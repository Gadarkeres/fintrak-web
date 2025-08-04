import { useAuthStore } from "@/context/useAuthStore";
import { Navigate } from "react-router-dom"

export default function RequireAuth({children}) {
  const user = useAuthStore((state) => state.user);

  if(!user?.name){
    return <Navigate to="/" />
  }
  
  return <>{children}</>
}
