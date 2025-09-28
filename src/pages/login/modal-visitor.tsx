import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/context/useAuthStore";

export default function ModalVisitor({ open, setOpen }) {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const squemaForm = z.object({
    name: z.string().min(1, "O nome de usuário é obrigatório"),
  });

  const form = useForm({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(squemaForm),
  });

  const submit = (data: z.infer<typeof squemaForm>) => {
    setUser({
      name: data.name,
      email: "",
      id: 0,
      isLoggedIn: false,
      balance: 0
    });
    setOpen(false);
    navigate("/dashboard");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Entrar como visitante</DialogTitle>
          <DialogDescription>
            Para continuar sem autenticação, informe um nome de usuário. Seus
            dados serão salvos apenas no seu navegador e não serão enviados para
            o servidor.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className="flex gap-3">
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) =>
                    Input({
                      ...field,
                      placeholder: "Nome de usuário",
                    })
                  }
                />
                <FormMessage>
                  {form.formState.errors?.name?.message}
                </FormMessage>
              </div>
              <Button type="submit">Entrar</Button>
            </form>
          </Form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
