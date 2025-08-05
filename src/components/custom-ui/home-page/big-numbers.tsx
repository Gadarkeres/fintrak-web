import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useAuthStore } from "@/context/useAuthStore";
import { formatCurrency } from "@/utils/format";

export default function BigNumbersHome() {
  const {user} = useAuthStore();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="w-full h-40 flex flex-col items-center justify-center p-5">
        <CardDescription className="text-base">
          Total gasto este mês
        </CardDescription>
        <CardTitle className="text-3xl font-bold">
          {formatCurrency(200)}
        </CardTitle>
      </Card>
      <Card className="w-full h-40 flex flex-col items-center justify-center p-5">
        <CardDescription className="text-base">Saldo atual</CardDescription>
        <CardTitle className="text-3xl font-bold">
          {formatCurrency(user?.balance ?? 0)}
        </CardTitle>
      </Card>

      <Card className="w-full h-40 flex flex-col items-center justify-center p-5">
        <CardDescription className="text-base">
          Contas a pagar este mês
        </CardDescription>
        <CardTitle className="text-3xl font-bold">
          {formatCurrency(100)}
        </CardTitle>
      </Card>

      <Card className="w-full h-40 flex flex-col items-center justify-center p-5">
        <CardDescription className="text-base">Vencem Hoje</CardDescription>
        <CardTitle className="text-3xl font-bold">
          {formatCurrency(1500)}
        </CardTitle>
      </Card>
    </div>
  );
}
