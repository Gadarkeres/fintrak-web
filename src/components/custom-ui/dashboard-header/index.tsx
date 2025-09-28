import { Button } from "@/components/ui/button";
import { Card, CardAction, CardHeader } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import useChangeTheme from "@/hooks/use-change-theme";
import { MoonIcon, PlusCircle, SunIcon } from "lucide-react";
import useAddBalance from "./hooks/use-add-balance";
import ModalAddBalance from "./modal-add-balance";
export default function DashboardHeader() {
  const { toggle, theme } = useChangeTheme();
  const { addBalance, open, setOpen } = useAddBalance();

  return (
    <>
      <Card className="@container/card-header rounded-none relative">
        <div className="absolute top-7 left-2">
          <SidebarTrigger />
        </div>
        <CardHeader>
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
