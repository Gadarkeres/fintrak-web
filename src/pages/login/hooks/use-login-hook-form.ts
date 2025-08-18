import { useAuthStore } from "@/context/useAuthStore";
import useLoginService from "@/services/use-login-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export default function useLoginHookForm() {
  const loginService = useLoginService();
  const [isLoading, setIsLoading] = useState(false);
  const {setUser} = useAuthStore();

  const squemaForm = z.object({
    email: z.email("Email inválido"),
    password: z.string().min(1, "A senha é obrigatória"),
  });
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(squemaForm),
  });

  const submit = async (data: z.infer<typeof squemaForm>) => {
    try {
      setIsLoading(true);
      const response = await loginService.login({ email: data.email, password: data.password });
      setUser(response.data.user);
      console.log(response.data.token);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    submit,
    isLoading,
  };
}
