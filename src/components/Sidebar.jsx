import React from "react";
import {
  BarChart3,
  Users,
  DollarSign,
  FileText,
  Calendar,
  Briefcase,
  Cog,
  LogOut,
} from "lucide-react";

export default function Sidebar({ activeMenu, setActiveMenu, sidebarOpen }) {
  const menuItems = [
    { name: "Dashboard", icon: BarChart3 },
    { name: "Staffs", icon: Users },
    { name: "Payroll", icon: DollarSign },
    { name: "Payslip", icon: FileText },
    { name: "Payroll Calendar", icon: Calendar },
    { name: "Analytics report", icon: BarChart3 },
    { name: "Loans", icon: Briefcase },
    { name: "Reports and Documents", icon: FileText },
    { name: "Settings", icon: Cog },
  ];

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } bg-gray-50 border-r border-gray-200 transition-all duration-300 flex flex-col`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-gray-200 flex items-center gap-3">
        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          NA
        </div>
        {sidebarOpen && (
          <h1 className="text-sm font-bold text-gray-800">NASFA Payroll</h1>
        )}
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`w-full px-4 py-3 flex items-center gap-3 transition-colors ${
                activeMenu === item.name
                  ? "bg-green-600 text-white border-r-4 border-green-700"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Icon size={20} />
              {sidebarOpen && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-gray-200 p-4">
        <button className="w-full flex items-center gap-3 text-gray-700 hover:bg-gray-200 px-4 py-3 rounded transition-colors">
          <LogOut size={20} />
          {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
}
