import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import z from "zod";
import {  zodResolver} from "@hookform/resolvers/zod"


export default function Login() {
  const squemaForm = z.object({
    email: z.email("Email inválido"),
    password: z.string(),
  })
  const form = useForm({
    resolver: zodResolver(squemaForm),
  });

  const submit = (data: z.infer<typeof squemaForm>) => {
    squemaForm.parse(data)
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors?.email?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="senha" type="password" {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors?.password?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit">Entrar</Button>
        </form>
      </Form>
    </div>
  );
}
