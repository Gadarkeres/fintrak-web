import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuthStore } from "@/context/useAuthStore";
import DropdownMenuUser from "./dropdown-menu-user";

export default function DashboardHeader() {
  const user = useAuthStore((state) => state.user);
  return (
    <Card className="@container/card-header rounded-none">
      <CardHeader>
        <CardTitle>Olá, {user?.name}</CardTitle>
        <CardDescription>Seja bem-vindo(a)</CardDescription>
        <CardAction>
          <DropdownMenuUser/>
        </CardAction>
        <Separator/>
      </CardHeader>
    </Card>
  );
}