import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

http.interceptors.response.use((response) => {
  switch (response.status) {
    case 500:
      alert("Erro interno do servidor")
      break;
    case 403:
      alert("Você não tem permissão para executar essa ação")
      break;
  }


  return response
})