import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./config/theme-provider.tsx";
import { Toaster } from "sonner";
import { CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
        <Toaster
          closeButton
          icons={{
            success: <CheckCircle color="green" />,
            error: <XCircle color="red" />,
            info: <Info />,
            warning: <AlertTriangle />,
          }}
        />
      </ThemeProvider>
  </StrictMode>
);
