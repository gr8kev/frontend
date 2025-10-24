import React from "react";

export default function Staff() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Staffs Management</h2>
      <p className="text-gray-600">
        Staff list and management will be displayed here. This section will
        show:
      </p>
      <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
        <li>Employee directory</li>
        <li>Profiles and details</li>
        <li>Department assignments</li>
        <li>Contact info</li>
        <li>Employment status</li>
      </ul>
    </div>
  );
}
