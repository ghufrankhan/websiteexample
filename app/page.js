export default function Home() {
  return (
    <div>
      <section className="text-center py-28">
        <h1 className="text-5xl font-bold">
          Elite Legal Representation
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Strategic, high-performance legal services.
        </p>

        <button className="mt-8 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full">
          Book Consultation
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-xl">20+ Years Experience</div>
        <div className="p-6 border rounded-xl">3000+ Cases</div>
        <div className="p-6 border rounded-xl">Global Clients</div>
      </section>
    </div>
  );
}
