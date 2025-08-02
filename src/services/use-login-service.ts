import { http } from "@/config/http-mode"

export default function useLoginService() {
  const login = (email: string, password: string) => {
    http.post("/login", { email, password })
  }

  return {
    login,
  }
}