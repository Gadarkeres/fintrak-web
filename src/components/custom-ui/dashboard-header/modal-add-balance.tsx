import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { NumericFormat } from "react-number-format";
import { Input } from "@/components/ui/input";

interface PropsModal {
  readonly open: boolean;
  readonly setOpen: (open: boolean) => void;
  readonly addBalance: (value: number) => void;
}

export default function ModalAddBalance({
  open,
  setOpen,
  addBalance,
}: PropsModal) {
  const squema = z.object({
    balance: z
      .number()
      .max(1000000, "O valor máximo permitido é R$ 1.000.000 por vez.")
      .min(1, "O valor mínimo permitido é R$ 1."),
  });

  const form = useForm({
    resolver: zodResolver(squema),
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar saldo</DialogTitle>
          <DialogDescription>
            Informe o valor que deseja adicionar ao seu saldo. Esse crédito será
            armazenado apenas localmente se você não estiver logado.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(({ balance }) => addBalance(balance))}
            className="flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="balance"
              render={({ field }) => (
                <NumericFormat
                  placeholder="R$ 100,00 "
                  prefix="R$ "
                  decimalSeparator=","
                  thousandSeparator="."
                  fixedDecimalScale
                  decimalScale={2}
                  customInput={Input}
                  onValueChange={({ floatValue }) => field.onChange(floatValue)}
                />
              )}
            />
            <FormMessage>{form.formState.errors?.balance?.message}</FormMessage>
            <div className=" w-full flex justify-end gap-3">
              <Button variant={"secondary"}>Cancelar</Button>
              <Button type="submit">Adicionar</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
