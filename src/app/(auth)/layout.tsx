export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/images/auth-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/50" />

      {/* Page content */}
      <div className="relative z-10 w-full px-4">
        {children}
      </div>
    </section>
  );
}
