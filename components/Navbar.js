import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-white/70 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <div className="font-bold">Bari Law Style</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
