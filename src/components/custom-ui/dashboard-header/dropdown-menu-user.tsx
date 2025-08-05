import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { useAuthStore } from "@/context/useAuthStore";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DropdownMenuUser() {
  const { setTheme, theme } = useTheme();
  const { logout } = useAuthStore();

  const handleTheme = (e: React.MouseEvent) => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    e.preventDefault();
  };
  const getTheme = () => {
    if (theme === "dark") {
      return "Ativar modo claro";
    }
    return "Ativar modo escuro";
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="data-[state=open]:bg-accent h-10 w-10"
        >
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Configurações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>Sair</DropdownMenuItem>
        <DropdownMenuItem onClick={(e) => handleTheme(e)}>
          {getTheme()}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
