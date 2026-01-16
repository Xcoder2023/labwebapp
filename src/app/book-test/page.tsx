export default function BookTestPage() {
  return (
    <section className="" style={{
          backgroundImage: "url('/images/lab-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
      <div className="max-w-3xl mx-auto  px-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          Book a Laboratory Test
        </h1>
        <p className="text-center text-blue-700 mb-2">
          Fill in the form below to schedule your laboratory test
        </p>

        <form className="bg-white rounded-2xl shadow p-8 space-y-6 my-auto">
          {/* FULL NAME */}
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* TEST SELECTION */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Test
            </label>
            <select className="w-full border rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Full Blood Count (FBC)</option>
              <option>Malaria Parasite</option>
              <option>Liver Function Test</option>
              <option>Kidney Function Test</option>
            </select>
          </div>

          {/* DATE */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* SUBMIT */}
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
}
