import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2, UserPlus } from "lucide-react";
import useRegisterHookForm from "./hooks/use-register-hook-form";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { form, submit, isLoading } = useRegisterHookForm();
  const navigator = useNavigate();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-[420px] shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Crie sua conta</CardTitle>
            <UserPlus className="h-5 w-5 text-primary" />
          </div>
          <CardDescription>
            Leva menos de 1 minuto para começar!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-primary">Registro</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Preencha os campos abaixo e comece já a organizar suas finanças.
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
                      <Input placeholder="Digite seu email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome de usuário</FormLabel>
                    <FormControl>
                      <Input placeholder="Escolha um nome" {...field} />
                    </FormControl>
                    <FormMessage />
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
                      <Input
                        placeholder="Crie uma senha segura"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirme a senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirme sua senha"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigator("/")}
                  disabled={isLoading}
                >
                  Já tenho conta
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {isLoading ? "Registrando..." : "Registrar"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
