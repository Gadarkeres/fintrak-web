import axios from "axios";
import { toast } from "sonner";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    toast.error("Ocorreu um erro ao realizar a operação");
    return Promise.reject(error);
  }
);
