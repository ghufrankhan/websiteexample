export default function Contact() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <div className="space-y-4 max-w-lg">
        <input className="w-full border p-3 rounded" placeholder="Name" />
        <input className="w-full border p-3 rounded" placeholder="Email" />
        <textarea className="w-full border p-3 rounded" placeholder="Message" />

        <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full">
          Send
        </button>
      </div>
    </div>
  );
}
