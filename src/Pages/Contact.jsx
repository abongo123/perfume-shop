export default function Contact() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Get in Touch
        </h1>
        <p className="text-gray-700 text-sm md:text-base">
          We'd love to hear from you. Send us a message anytime.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE (INFO + OPTIONAL IMAGE) */}
        <div className="space-y-6 text-sm md:text-base text-gray-800">

          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p>support@tedbelperfumes.com</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p>+254 708 684 738</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Location</h3>
            <p>Nairobi, Kenya</p>
          </div>
        </div>

        {/* ✅ FORM WITH PROPER CONTRAST */}
        <form className="bg-white p-6 rounded-xl shadow-md space-y-5">

          <div>
            <label className="text-sm text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 rounded border border-gray-300 outline-none focus:ring-2 focus:ring-[#828c51]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full mt-1 p-2 rounded border border-gray-300 outline-none focus:ring-2 focus:ring-[#828c51]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Message</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-2 rounded border border-gray-300 outline-none focus:ring-2 focus:ring-[#828c51]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#828c51] text-black py-2 rounded font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}
