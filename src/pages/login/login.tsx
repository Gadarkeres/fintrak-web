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
import useLoginHookForm from "../login/hooks/use-login-hook-form";
import ModalVisitor from "../login/modal-visitor";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/context/useAuthStore";
import { Loader2 } from "lucide-react";

export default function Login() {
  const navigator = useNavigate();

  const { form, submit, isLoading } = useLoginHookForm();
  const [isVisitorModalOpen, setIsVisitorModalOpen] = useState(false);
  const { user } = useAuthStore();

  useEffect(() => {
    if (user?.name) {
      navigator("/dashboard");
    }
  }, [navigator, user?.name]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-100">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardAction>
            <Button
              variant={"link"}
              onClick={() => setIsVisitorModalOpen(true)}
            >
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
              <div className="flex justify-between flex-reverse">
                <Button onClick={() => navigator("/register")} type="button" variant="outline" /*disabled={isLoading}*/ disabled={true} title="Em breve!">Registre-se</Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <ModalVisitor open={isVisitorModalOpen} setOpen={setIsVisitorModalOpen} />
    </div>
  );
}
