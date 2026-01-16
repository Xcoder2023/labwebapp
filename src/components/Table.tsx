export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow">
      <table className="min-w-full text-sm">{children}</table>
    </div>
  );
}
