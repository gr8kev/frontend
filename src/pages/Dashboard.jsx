import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Staff from "./staff";
import DashboardContent from "./DashboardContent";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <DashboardContent />;
      case "Staffs":
        return <Staff />;
      //   case "Payroll":
      //     return <PayrollContent />;
      //   case "Payslip":
      //     return <PayslipContent />;
      //   case "Payroll Calendar":
      //     return <PayrollCalendarContent />;
      //   case "Analytics report":
      //     return <AnalyticsContent />;
      //   case "Loans":
      //     return <LoansContent />;
      //   case "Reports and Documents":
      //     return <ReportsContent />;
      //   case "Settings":
      //     return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        sidebarOpen={sidebarOpen}
      />
      <div className="flex-1 flex flex-col">
        <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 overflow-auto p-6">{renderContent()}</div>
      </div>
    </div>
  );
}
