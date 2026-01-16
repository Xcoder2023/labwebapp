import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm fixed top-0 left-0 w-full z-50 ">
      <h1 className="text-xl font-bold text-blue-600">LabCare</h1>
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/services" className="hover:text-blue-600">
          Services
        </Link>
        <Link href="/book-test" className="hover:text-blue-600">
          Book Test
        </Link>
      </div>
    </nav>
  );
}
