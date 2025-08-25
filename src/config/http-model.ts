import axios, { AxiosError } from "axios";
import { toast } from "sonner";
type ApiError = {
  message: string;
  error: string;
  statusCode: number;
};

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_PATH,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<ApiError>) => {
    const apiMessage = error.response?.data.message;
    const status = error.response?.status
     toast.error(
      apiMessage
        ? `Erro ${status}: ${apiMessage}`
        : "Ocorreu um erro inesperado. Tente novamente."
    );
    return Promise.reject(error);
  }
);
