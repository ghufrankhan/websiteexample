"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <header className="fixed top-0 w-full bg-white/70 dark:bg-black/70 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <div className="font-bold">Bari Law Pro</div>

        <nav className="space-x-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/team">Team</Link>
          <Link href="/testimonials">Results</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button onClick={toggle} className="text-xs border px-3 py-1 rounded">
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}
