import { BrowserRouter, Route, Routes } from "react-router-dom";

import RequireAuth from "@/components/custom-ui/require-auth";
import Dashboard from "@/pages/dashboard";
import { AppSidebar } from "@/components/custom-ui/sidebar-app";
import { SidebarProvider } from "@/components/ui/sidebar";
import HomePage from "@/components/custom-ui/home-page";
import Register from "@/pages/register/register";
import Login from "@/pages/login/login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />

        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route path="/dashboard" Component={HomePage}  />
          </Route>
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  );
}
