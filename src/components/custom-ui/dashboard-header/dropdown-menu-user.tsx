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

export default function DropdownMenuUser() {
  const { setTheme, theme } = useTheme();
  const {logout} = useAuthStore();

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
          <button className="p-2 rounded-full focus:outline-none">
          <Settings className="w-5 h-5" />
        </button>
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
