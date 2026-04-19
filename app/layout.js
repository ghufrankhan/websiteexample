import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Premium Law Firm",
  description: "Modern legal services"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-24 max-w-6xl mx-auto px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
