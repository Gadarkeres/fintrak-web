import { useAuthStore } from "@/context/useAuthStore";
import dayjs from "dayjs";

export default function Greetins() {
  const { user } = useAuthStore();

  const greeting = () => {
    const hour = dayjs().hour();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };
  return (
    <h2 className="scroll-m-20 pb-2 h-15 text-3xl font-semibold tracking-tight first:mt-0 md:h-12">
      {greeting()}, {user?.name}
    </h2>
  );
}
