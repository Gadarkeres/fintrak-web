import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toaster } from "sonner";
import { CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
  </StrictMode>
);
