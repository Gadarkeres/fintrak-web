import { http } from "@/config/http-model";
import type { AxiosResponse } from "axios";

export default function useLoginService() {
  const login = (email: string, password: string):Promise<AxiosResponse<object, string>> => {
     return http.post("/auth/login", { email, password });
  };
  const register = (email: string, password: string) => {
    http.post("/auth/register", { email, password });
  };

  return {
    login,
    register,
  };
}
