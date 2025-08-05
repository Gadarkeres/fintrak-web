import {Home, Table2Icon, PlusIcon, LayoutDashboard } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/context/useAuthStore";
import DropdownMenuUser from "../dashboard-header/dropdown-menu-user";
import { useLocation } from "react-router-dom";

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Despesas",
    url: "/dashboard/despesas",
    icon: Table2Icon,
  },  
  {
    title: "Relatórios",
    url: "/dashboard/relatorios",
    icon: LayoutDashboard,
  },
  {
    title: "Criar Despesa",
    url: "/dashboard/cadastro",
    icon: PlusIcon,
  },
];

export function AppSidebarContent() {
  const { user } = useAuthStore();
  const {pathname} = useLocation();

  const isActive =  (url:string):boolean => {
    return pathname === url;
  }

  return (
    <>
      {user?.name ? (
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Fintrak</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton isActive={isActive(item.url)} asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                            
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
           <DropdownMenuUser />
          </SidebarFooter>
        </Sidebar>
      ) : null}
    </>
  );
}
