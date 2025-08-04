import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/login/login";

import Dashboard from "@/pages/dashboard";
import RequireAuth from "@/components/custom-ui/require-auth";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
      </Routes>
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      >
        {/* <Route path="despesas" element={<DespesasList />} />
          <Route path="graficos" element={<Graficos />} />
          <Route path="cadastro" element={<CadastroDespesa />} /> */}
      </Route>
    </BrowserRouter>
  );
}
