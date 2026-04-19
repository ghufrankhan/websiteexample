export default function Services() {
  const items = [
    "Corporate Law",
    "Family Law",
    "Property Law",
    "Employment Law",
    "Dispute Resolution",
    "Regulatory Compliance"
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">Services</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map(i => (
          <div key={i} className="p-6 border rounded-xl hover:shadow-lg">
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
