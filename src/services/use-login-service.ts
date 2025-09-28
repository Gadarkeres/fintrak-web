import { http } from "@/config/http-model";
import type { LoginResponse } from "@/types/api";
import type { AxiosResponse } from "axios";


export default function useLoginService() {
  const login = (
    body: {
      email: string;
      password: string;
    }
  ): Promise<AxiosResponse<LoginResponse, string>> => {
    return http.post("/auth/login", body);
  };
  const register = (
    body: {
      email: string;
      name: string;
      password: string;
    }
  ): Promise<AxiosResponse<void, string>> => {
    return http.post("/auth/register", body);
  };

  return {
    login,
    register,
  };
}
