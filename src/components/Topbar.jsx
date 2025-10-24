import React from "react";
import { Bell, Search, Menu } from "lucide-react";

export default function Topbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <Menu size={20} />
        </button>
        <div className="relative">
          <Search size={20} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search within the Dashboard"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Bell
          size={20}
          className="text-gray-600 cursor-pointer hover:text-gray-800"
        />
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-medium text-sm">Major. Adulkareem .S. Sultan</p>
            <p className="text-xs text-gray-500">Major General</p>
          </div>
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
            MG
          </div>
        </div>
      </div>
    </div>
  );
}
