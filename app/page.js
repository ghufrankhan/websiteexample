export default function Home() {
  return (
    <div className="pt-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-95"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-28 text-white text-center">
          <h1 className="text-5xl font-bold">
            Trusted Legal Expertise.
          </h1>

          <p className="mt-6 text-gray-300">
            Premium modern legal services.
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full">
            Book Consultation
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-3 text-center py-12 border-b">
        <div><p className="text-2xl font-bold">15+</p><p>Years</p></div>
        <div><p className="text-2xl font-bold">2000+</p><p>Cases</p></div>
        <div><p className="text-2xl font-bold">98%</p><p>Satisfaction</p></div>
      </section>
    </div>
  );
}
