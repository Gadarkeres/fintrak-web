import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useLoginHookForm from "./hooks/use-login-hook-form";
import ModalVisitor from "./modal-visitor";
import { useState } from "react";

export default function Login() {
  const { form, submit } = useLoginHookForm();
  const [isVisitorModalOpen, setVisitorModalOpen] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-100">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardAction>
            <Button variant={"link"} onClick={() => setVisitorModalOpen(true)}>
              Ou entre como visitante
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-primary">FinTrack</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Controle suas finanças de forma simples e segura
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors?.email?.message}
                    </FormMessage>
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
                    <FormMessage>
                      {form.formState.errors?.password?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <Button type="submit">Entrar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <ModalVisitor open={isVisitorModalOpen} setOpen={setVisitorModalOpen} />
    </div>
  );
}
