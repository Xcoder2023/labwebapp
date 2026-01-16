"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative text-white py-28"
        style={{
          backgroundImage: "url('/images/lab-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/70 to-blue-900/30"></div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Accurate Results You Can Trust
            </h1>

            <p className="mb-8 text-lg text-blue-100">
              Reliable diagnostic testing with modern laboratory equipment and
              certified professionals.
            </p>

            <a
              href="/book-test"
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              Book a Test
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: "url('/images/lab-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <h3 className="font-semibold text-lg mb-2">Hematology</h3>
              <p className="text-sm text-gray-600">
                Blood analysis and full blood count tests.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <h3 className="font-semibold text-lg mb-2">Microbiology</h3>
              <p className="text-sm text-gray-600">
                Infection, culture, and sensitivity testing.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <h3 className="font-semibold text-lg mb-2">Chemical Pathology</h3>
              <p className="text-sm text-gray-600">
                Hormone, liver, kidney, and sugar tests.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4">
              <h4 className="font-semibold">Accurate Results</h4>
              <p className="text-sm text-gray-600">
                Strict quality control standards.
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold">Fast Turnaround</h4>
              <p className="text-sm text-gray-600">
                Results delivered on time.
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold">Certified Staff</h4>
              <p className="text-sm text-gray-600">
                Qualified laboratory professionals.
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold">Secure Reports</h4>
              <p className="text-sm text-gray-600">
                Confidential and protected data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & COMPLIANCE */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: "url('/images/lab-certifications.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-blue-900/55"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Certifications & Compliance
          </h2>

          <p className="text-blue-100 mb-10">
            Our laboratory operates in compliance with national and
            international medical testing standards.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <span className="bg-white/90 text-blue-900 px-6 py-3 rounded-lg shadow">
              ISO Certified
            </span>
            <span className="bg-white/90 text-blue-900 px-6 py-3 rounded-lg shadow">
              Government Approved
            </span>
            <span className="bg-white/90 text-blue-900 px-6 py-3 rounded-lg shadow">
              Quality Assured
            </span>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        className=" py-24 bg-white my-6"
        // style={{
        //   backgroundImage: "url('/images/lab-cta.png')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        {/* OVERLAY */}
        {/* <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 to-blue-900/40"></div> */}

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready for Accurate Medical Testing?
          </h2>

          <p className=" mb-8 text-lg">
            Schedule your laboratory test today with certified professionals and
            modern equipment.
          </p>

          <a
            href="/book-test"
            className="inline-block bg-gray-300 text-blue-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Book a Test
          </a>
        </div>
      </section>
    </>
  );
}
