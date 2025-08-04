import { useAuthStore } from "@/context/useAuthStore";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  return <div>Olá, {user?.name}</div>;
}