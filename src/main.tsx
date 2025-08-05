import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toaster } from "sonner";
import { CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";
import { AppSidebar } from "./components/custom-ui/sidebar-app/index.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider defaultOpen>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppSidebar />
        <App />

        <Toaster
          richColors
          closeButton
          icons={{
            success: <CheckCircle />,
            error: <XCircle />,
            info: <Info />,
            warning: <AlertTriangle />,
          }}
        />
      </ThemeProvider>
    </SidebarProvider>
  </StrictMode>
);
