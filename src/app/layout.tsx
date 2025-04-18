import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vele-Transport | Professional Transport and Logistics in Germany",
  description: "Professional transport and logistics services in Germany, specialized in Baden-Württemberg. Trusted partner for FedEx, DHL, and other major companies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-teal-900 to-blue-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
