import { http } from "@/config/http-model"

export default function useLoginService() {
  const login = (email: string, password: string) => {
    http.post("/login", { email, password })
  }

  return {
    login,
  }
}