import { Button } from "@/components/ui/button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuthStore } from "@/context/useAuthStore";
import useChangeTheme from "@/hooks/use-change-theme";
import { Github, MoonIcon, SunIcon } from "lucide-react";
import { Link } from "react-router-dom";
export default function DashboardHeader() {
  const user = useAuthStore((state) => state.user);
  const { toggle, theme } = useChangeTheme();

  return (
    <Card className="@container/card-header rounded-none relative">
      <div className="absolute top-0 left-0">
        <SidebarTrigger />
      </div>
      <CardHeader>
        <CardTitle>Olá, {user?.name}</CardTitle>
        <CardAction className="flex gap-1.5">
          <Link
            to={"https://github.com/Gadarkeres/fintrak-web"}
            target="_blank"
          >
            <Button variant={"default"}>
              GitHub <Github />
            </Button>
          </Link>
          <Button variant={"secondary"} onClick={toggle}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
