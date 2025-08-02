import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

export default function LoginHookForm(){
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
      console.log(data)
    };


    return{
        form,
        submit
    }
}