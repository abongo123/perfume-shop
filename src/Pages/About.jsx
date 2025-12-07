import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          About Tedbel Perfumes
        </h1>
        <p className="text-gray-800 max-w-2xl mx-auto text-sm md:text-base">
          We are dedicated to bringing you premium fragrances that define elegance, confidence, and identity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 text-sm md:text-base text-gray-800">
          <p>Tedbel Perfumes was founded with a simple mission: to make luxury fragrances accessible, authentic, and unforgettable.</p>
          <p>Every scent we offer is carefully selected to reflect quality, longevity, and elegance. Whether you prefer bold, fresh, floral, or woody fragrances. We have something crafted just for you.</p>
          <p>Our commitment goes beyond selling perfumes. We aim to help you express personality, mood, and confidence through scent.</p>
        </div>
        <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden">
          <img
            src={aboutImg}
            alt="Luxury Perfume Story"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Our Core Values</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg border border-[#F2F2F2] shadow-md">
            <h3 className="font-semibold mb-2">Authenticity</h3>
            <p className="text-sm text-gray-800">We guarantee 100% genuine products.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-[#F2F2F2] shadow-md">
            <h3 className="font-semibold mb-2">Quality</h3>
            <p className="text-sm text-gray-800">
              Only the best long-lasting fragrances.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-[#F2F2F2] shadow-md">
            <h3 className="font-semibold mb-2">Customer First</h3>
            <p className="text-sm text-gray-800">
              Your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
