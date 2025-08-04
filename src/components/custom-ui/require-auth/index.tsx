import { useAuth } from "@/context/authContext"
import { Navigate } from "react-router-dom"

export default function RequireAuth({children}) {
  const {user} = useAuth()

  if(!user?.name){
    return <Navigate to="/" />
  }
  
  return <>{children}</>
}
