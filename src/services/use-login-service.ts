import { http } from "@/config/http-model";
import type { AxiosResponse } from "axios";
import type { components } from "@/types/api";

type AuthDtoRegister = components["schemas"]["AuthDtoRegister"];
type AuthDtoLogin = components["schemas"]["AuthDtoLogin"];
type AuthDtoResponse = components["schemas"]["userDtoResponse"];

export default function useLoginService() {
  const login = (
    body: AuthDtoLogin
  ): Promise<AxiosResponse<AuthDtoResponse, string>> => {
    return http.post("/auth/login", body);
  };
  const register = (
    body: AuthDtoRegister
  ): Promise<AxiosResponse<AuthDtoResponse, string>> => {
    return http.post("/auth/register", body);
  };

  return {
    login,
    register,
  };
}
