import useLoginService from "@/services/use-login-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import z from "zod";

export default function useRegisterHookForm() {
  const loginService = useLoginService();
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();

  const squemaForm = z.object({
    email: z.email("Email inválido"),
    name: z.string().min(1, "O nome de usuário é obrigatório"),
    password: z.string().min(1, "A senha é obrigatória"),
    confirmPassword: z.string().min(1, "A senha é obrigatória"),
  });
  const form = useForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: ""
    },
    resolver: zodResolver(squemaForm),
  });

  const submit = async (data: z.infer<typeof squemaForm>) => {
    if(data.password !== data.confirmPassword) {
      toast.error("As senhas devem ser iguais!");
      return
    }
    try {
      setIsLoading(true);
      await loginService.register({
        email: data.email,
        name: data.name,
        password: data.password,
      });
      toast.success("Cadastro realizado com sucesso!");
      navigator("/");
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
