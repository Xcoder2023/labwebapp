export default function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Completed: "bg-green-100 text-green-700",
    Processing: "bg-yellow-100 text-yellow-700",
    Pending: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        colors[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}
