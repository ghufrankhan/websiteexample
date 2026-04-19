export default function Contact() {
  return (
    <div className="pt-28 max-w-3xl mx-auto px-6">
      <h1 className="text-4xl font-bold">Contact</h1>

      <form className="mt-8 space-y-4">
        <input className="w-full border p-3" placeholder="Name" />
        <input className="w-full border p-3" placeholder="Email" />
        <textarea className="w-full border p-3" placeholder="Message" />

        <button className="bg-black text-white px-6 py-3">
          Send
        </button>
      </form>
    </div>
  );
}
