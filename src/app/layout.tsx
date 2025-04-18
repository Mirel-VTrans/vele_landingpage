import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vele-Transporte | Transport și Logistică în Germania",
  description: "Servicii profesionale de transport și logistică în Germania, specializați în Baden-Württemberg. Partener de încredere pentru FedEx, DHL, și alte companii majore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="transition-colors duration-300">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
