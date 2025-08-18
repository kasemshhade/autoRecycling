import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sell Your Used Car for Cash in Ontario, Canada | KC Auto-Recycling",
  description:
    "Get instant cash for your used car in Ontario, Canada with KC Auto-Recycling. We offer hassle-free transactions and top dollar for your vehicle. Contact us today!",
  verification: {
    google: "FHqc6NCHweS9fG-CcpFj9AA5PPHjwko0r-iXDaQKUK0",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
    languages: {
      en: process.env.NEXT_PUBLIC_SITE_URL,
      "x-default": process.env.NEXT_PUBLIC_SITE_URL,
    },
  },
  keywords: [
    "we buy cars Ontario",
    "Sell used car Ontario",
    "Canada",
    "cash for cars",
    "buy used cars",
    "sell my car",
    "instant cash",
    "Ontario car buyers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
