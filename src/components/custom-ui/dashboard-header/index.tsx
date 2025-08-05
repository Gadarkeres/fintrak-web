import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuthStore } from "@/context/useAuthStore";
import DropdownMenuUser from "./dropdown-menu-user";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export default function DashboardHeader() {
  const user = useAuthStore((state) => state.user);
   const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  return (
    <Card className="@container/card-header rounded-none">
      <CardHeader>
        <CardTitle>Olá, {user?.name}</CardTitle>
        <CardDescription>Seja bem-vindo(a)</CardDescription>
        <CardAction>
          
          <div className="flex items-center gap-2">
            <Link to="/dashboard/despesas">
              <Button variant={isActive("/dashboard/despesas") ? "secondary" : "ghost"}>Despesas</Button>
            </Link>
            <Link to="/dashboard/graficos">
              <Button variant={isActive("/dashboard/graficos") ? "secondary" : "ghost"}>Gráficos</Button>
            </Link>
            <Link to="/dashboard/cadastro">
              <Button variant={isActive("/dashboard/cadastro") ? "secondary" : "ghost"}>+ Nova</Button>
            </Link>
            <DropdownMenuUser />
          </div>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
