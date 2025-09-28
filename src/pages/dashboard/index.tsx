import DashboardHeader from "@/components/custom-ui/dashboard-header";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
      <div className="w-full h-full">
      <DashboardHeader />
      <div className="p-6">
        <Outlet /> 
      </div>
    </div>
  );
}