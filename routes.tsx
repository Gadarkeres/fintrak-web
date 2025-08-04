import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/login/login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}
