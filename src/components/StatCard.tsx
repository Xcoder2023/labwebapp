export default function StatCard({ title, value }: { title: string; value: string }) {
return (
<div className="bg-white rounded-2xl shadow p-6">
<p className="text-sm text-gray-500 mb-2">{title}</p>
<h3 className="text-2xl font-bold text-blue-600">{value}</h3>
</div>
);
}