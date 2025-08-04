import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    toast.error("Ocorreu um erro ao realizar a operação com o código: " + error.status);
    return Promise.reject(error);
  }
);
