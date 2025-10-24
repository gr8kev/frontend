import React from "react";
import {
  Users,
  DollarSign,
  Briefcase,
  FileText,
  TrendingUp,
} from "lucide-react";

export default function DashboardContent() {
  const summaryCards = [
    {
      title: "Total Staffs",
      value: "124",
      icon: <Users className="text-green-600" size={26} />,
    },
    {
      title: "Payrolls Processed",
      value: "₦12.4M",
      icon: <DollarSign className="text-green-600" size={26} />,
    },
    {
      title: "Active Loans",
      value: "₦3.2M",
      icon: <Briefcase className="text-green-600" size={26} />,
    },
    {
      title: "Reports Generated",
      value: "56",
      icon: <FileText className="text-green-600" size={26} />,
    },
  ];

  const recentPayrolls = [
    { name: "Major S. Johnson", amount: "₦450,000", date: "Oct 5, 2025" },
    { name: "Capt. A. Musa", amount: "₦395,000", date: "Oct 5, 2025" },
    { name: "Lt. Col. J. Bello", amount: "₦520,000", date: "Oct 5, 2025" },
    { name: "Sgt. I. Uche", amount: "₦285,000", date: "Oct 5, 2025" },
  ];

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition-all duration-200 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <h2 className="text-2xl font-semibold mt-2">{card.value}</h2>
            </div>
            <div className="bg-green-50 p-3 rounded-xl">{card.icon}</div>
          </div>
        ))}
      </div>

      {/* Chart / Insights Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="text-green-600" /> Monthly Payroll Summary
          </h2>
          <div className="h-48 flex items-center justify-center text-gray-400">
            📊 (Chart coming soon...)
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Payrolls</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="py-2">Name</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentPayrolls.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">{item.amount}</td>
                  <td className="py-2">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-xs text-gray-400 text-center pt-4">
        NASFA Payroll Dashboard — Dummy Data for Design Preview
      </p>
    </div>
  );
}
