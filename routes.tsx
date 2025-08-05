import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/login/login";

import RequireAuth from "@/components/custom-ui/require-auth";
import Dashboard from "@/pages/dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {/* <Route path="/dashboard/despesas" element={<DespesasList />} />
          <Route path="/dashboard/relatorios" element={<Relatorios />} />
          <Route path="/dashboard/cadastro" element={<CadastroDespesa />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
