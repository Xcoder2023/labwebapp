import StatCard from "@/components/StatCard";

export default function AdminDashboard() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600 mb-10">
          Manage laboratory operations and results
        </p>

        {/* STATS CARDS */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <StatCard title="Total Tests" value="124" />
          <StatCard title="Pending Results" value="18" />
          <StatCard title="Completed Today" value="32" />
          <StatCard title="Registered Patients" value="86" />
        </div>
        {/* APPOINTMENTS TABLE */}
        <div className="bg-white rounded-2xl shadow mb-12 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-4">Patient</th>
                <th className="text-left px-6 py-4">Test</th>
                <th className="text-left px-6 py-4">Date</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-left px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">Full Blood Count</td>
                <td className="px-6 py-4">2026-01-14</td>
                <td className="px-6 py-4">Pending</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline">
                    Upload Result
                  </button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4">Jane Smith</td>
                <td className="px-6 py-4">Malaria Parasite</td>
                <td className="px-6 py-4">2026-01-14</td>
                <td className="px-6 py-4">Processing</td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 cursor-not-allowed">
                    In Progress
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* UPLOAD RESULTS UI */}
        <div className="bg-white rounded-2xl shadow p-8 max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Upload Test Result</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Patient Name"
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Test Name"
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="file"
              className="w-full border rounded-lg px-4 py-2 bg-white"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Upload Result
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
