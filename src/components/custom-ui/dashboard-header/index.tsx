import { Button } from "@/components/ui/button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuthStore } from "@/context/useAuthStore";
import useChangeTheme from "@/hooks/use-change-theme";
import { MoonIcon, PlusCircle, SunIcon } from "lucide-react";
import ModalAddBalance from "./modal-add-balance";
import useAddBalance from "./hooks/use-add-balance";
export default function DashboardHeader() {
  const user = useAuthStore((state) => state.user);
  const { toggle, theme } = useChangeTheme();
  const { addBalance, open, setOpen } = useAddBalance();

  return (
    <>
      <Card className="@container/card-header rounded-none relative">
        <div className="absolute bottom-0 left-0">
          <SidebarTrigger />
        </div>
        <CardHeader>
          <CardTitle>Olá, {user?.name}</CardTitle>
          <CardAction className="flex gap-1.5">
            <Button
              onClick={() => setOpen(true)}
              variant={"default"}
              className="cursor-pointer"
            >
              <PlusCircle /> Adicionar saldo
            </Button>
            <Button variant={"secondary"} onClick={toggle}>
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
      <ModalAddBalance open={open} setOpen={setOpen} addBalance={addBalance} />
    </>
  );
}
