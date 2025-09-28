import type { User } from "@/context/useAuthStore";

type UserResponse = User

export interface LoginResponse {
  user: UserResponse;
  token: string;
}
