export default function Services() {
  return (
    <div className="pt-28 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center">Services</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {['Family Law','Business Law','Property Law'].map(s => (
          <div key={s} className="p-6 border rounded-xl">
            <h3 className="font-semibold">{s}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
