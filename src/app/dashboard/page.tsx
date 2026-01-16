import StatusBadge from "@/components/StatusBadge";

export default function UserDashboard() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-2">My Test Dashboard</h1>
        <p className="text-gray-600 mb-8">
          View your test history and download results
        </p>

        {/* TEST HISTORY TABLE */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-4">Test Name</th>
                <th className="text-left px-6 py-4">Date</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-left px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-6 py-4">Full Blood Count</td>
                <td className="px-6 py-4">2026-01-10</td>
                <td className="px-6 py-4">
                  <StatusBadge status="Completed" />
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline">
                    Download
                  </button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4">Malaria Parasite</td>
                <td className="px-6 py-4">2026-01-12</td>
                <td className="px-6 py-4">
                  <StatusBadge status="Processing" />
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 cursor-not-allowed">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4">Liver Function Test</td>
                <td className="px-6 py-4">2026-01-14</td>
                <td className="px-6 py-4">
                  <StatusBadge status="Pending" />
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 cursor-not-allowed">
                    Pending
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
