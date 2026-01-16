export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      {/* <p className="text-sm">
        © {new Date().getFullYear()} LabCare Diagnostic Laboratory
      </p> */}

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* LOGO / BRAND */}
        <div className="mb-6 md:mb-0 font-bold text-xl">Trusted Lab</div>

        {/* NAV LINKS */}
        <div className="flex flex-wrap gap-6 text-sm">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/services" className="hover:underline">
            Services
          </a>
          <a href="/book-test" className="hover:underline">
            Book a Test
          </a>
          <a href="/dashboard" className="hover:underline">
            Dashboard
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm text-blue-200 mt-6 md:mt-0">
          &copy; {new Date().getFullYear()} Trusted Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
