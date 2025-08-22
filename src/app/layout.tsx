import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Sell Your Used Vehicle for Cash in Ontario, Canada | KC Auto-Recycling",
  description:
    "Get instant cash for your used vehicle in Ontario, Canada with KC Auto-Recycling. We offer hassle-free transactions and top dollar for your vehicle. Contact us today!",
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
    "we buy vehicles Ontario",
    "Sell used car Ontario",
    "Sell used vehicle Ontario",
    "Canada",
    "cash for cars",
    "buy used cars",
    "sell my car",
    "sell my vehicle",
    "instant cash",
    "Ontario car buyers",
    "Ontario vehicle buyers",
    "scrap vehicle",
    "scrap vehicles",
    "Cash for cars",
    "Scrap cars",
    "Junk cars",
    "Used cars for sale",
    "Sell car",
    "Sell used car",
    "Sell scrap cars",
    "Buy cars",
    "Buy scrap cars",
    "Sell used cars",
    "Auto parts",
    "Old cars",
    "Sell old car",
    "Junk car",
    "Junk auto",
    "Sell auto",
    "Sell suv",
    "Sell van",
    "Sell minivan",
    "Free pick up",
    "Junk yard",
    "Car wreckers",
    "Scrap yard",
  ],
  openGraph: {
    title: "KC Auto Recycling | Eco-Friendly Car Recycling in ONtario",
    description:
      "Sell your old car hassle-free with KC Auto Recycling. We provide eco-friendly auto recycling services in Ontario.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "KC Auto Recycling",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://kcautorecycling.ca/cardeal.png", // optimized for 1200x630 px
        width: 1200,
        height: 630,
        alt: "KC Auto Recycling - Eco-Friendly Vehicle Recycling in Ontario",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
console.log("NEXT_PUBLIC_SITE_URL", process.env.NEXT_PUBLIC_SITE_URL)
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["AutoDealer", "RecyclingCenter"], // Multiple business types
              name: "KC Auto Recycling",
              url: "https://kcautorecycling.ca",
              logo: "https://kcautorecycling.ca/logo.png",
              image: "https://kcautorecycling.ca/cardeal.png",
              description:
                "KC Auto Recycling buys used vehicles for cash and salvages vehicles for scrap recycling across Canada. Fast pickup and eco-friendly disposal.",
              telephone: "+1-647-533-3813",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7720 Queen's Line",
                addressLocality: "Chatham",
                addressRegion: "ON",
                postalCode: "N7M 5T1",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "42.3778170596148",
                longitude: "-82.2188511627239",
              },
              openingHours: "Mo-Fri 09:00-20:00",
              sameAs: [
                "https://web.facebook.com/profile.php?id=100064321860658",
                // "https://www.instagram.com/yourpage",
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Cash for Used Cars",
                    description:
                      "We buy old, damaged, and unwanted cars for cash.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Car Salvage & Scrap Recycling",
                    description:
                      "Eco-friendly recycling and disposal of scrap vehicles and auto parts.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
