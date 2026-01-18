export default function BookTestPage() {
  return (
    <section
      className="mt-14"
      style={{
        backgroundImage: "url('/images/lab-services.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-bold text-center pt-2">
            Book a Laboratory Test
          </h1>
          <p className="text-center text-blue-700">
            Fill in the form below to schedule your laboratory test
          </p>
        </div>

        {/* FORM */}
       <div className="flex justify-center w-full py-8">
         <form className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-4">
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

          {/* TEST */}
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
      </div>
    </section>
  );
}
