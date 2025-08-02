import useLoginService from "@/services/use-login-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

export default function useLoginHookForm(){

  const loginService = useLoginService();

    const squemaForm = z.object({
      email: z.email("Email inválido"),
      password: z.string().min(1, "A senha é obrigatória"),
    })
    const form = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
      resolver: zodResolver(squemaForm),
    });
  
    const submit = (data: z.infer<typeof squemaForm>) => {
      squemaForm.parse(data)
      loginService.login(data.email, data.password)
    };


    return{
        form,
        submit
    }
}