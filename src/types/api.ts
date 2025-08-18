import type { User } from "@/context/useAuthStore";

export interface UserResponse extends User {
  name: string;
  email: string;
  id: number;
  balance: number;
}

export interface LoginResponse {
  user: UserResponse;
  token: string;
}
