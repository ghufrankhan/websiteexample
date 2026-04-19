export default function Team() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {["Senior Partner","Litigation Lead","Corporate Advisor"].map(p => (
          <div key={p} className="border p-6 rounded-xl">
            <div className="h-32 bg-gray-200 dark:bg-gray-800 mb-4 rounded" />
            <h3 className="font-semibold">{p}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
