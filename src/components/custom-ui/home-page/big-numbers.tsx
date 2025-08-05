import {
  Card,
  CardAction,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/utils/format";

export default function BigNumbersHome() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="w-full h-40 flex flex-col items-center justify-center p-5">
        <CardDescription className="text-base">Saldo atual</CardDescription>
        <CardTitle className="text-3xl font-bold">
          {formatCurrency(500)}
        </CardTitle>
        <CardAction className="flex gap-1.5">
          <CardDescription className="text-sm">-10%</CardDescription>
          <CardDescription className="text-sm">Desde ontem</CardDescription>
        </CardAction>
      </Card>
      <Card className="w-full h-40 flex flex-col items-center justify-center p-5">
        <CardDescription className="text-base">
          Contas a pagar este mês
        </CardDescription>
        <CardTitle className="text-3xl font-bold">
          {formatCurrency(100)}
        </CardTitle>
        <CardAction className="flex gap-1.5">
          <CardDescription className="text-sm">-10%</CardDescription>
          <CardDescription className="text-sm">Desde ontem</CardDescription>
        </CardAction>
      </Card>
      <Card className="w-full h-40 flex flex-col items-center justify-center p-5">
        <CardDescription className="text-base">
          Total gasto este mês
        </CardDescription>
        <CardTitle className="text-3xl font-bold">
          {formatCurrency(200)}
        </CardTitle>
        <CardAction className="flex gap-1.5">
          <CardDescription className="text-sm">-10%</CardDescription>
          <CardDescription className="text-sm">Desde ontem</CardDescription>
        </CardAction>
      </Card>

      <Card className="w-full h-40 flex flex-col items-center justify-center p-5">
        <CardDescription className="text-base">Vencem Hoje</CardDescription>
        <CardTitle className="text-3xl font-bold">
          {formatCurrency(1500)}
        </CardTitle>
        <CardAction className="flex gap-1.5">
          <CardDescription className="text-sm">-10%</CardDescription>
          <CardDescription className="text-sm">Desde ontem</CardDescription>
        </CardAction>
      </Card>
    </div>
  );
}
