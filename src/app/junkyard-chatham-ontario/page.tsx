// app/junkyard-chatham-ontario/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junkyard in Chatham Ontario | Scrap Car Removal & Cash for Cars",
  description:
    "KC Auto Recycling offers junkyard and scrap car removal services in Chatham, Ontario. Get cash for cars, free pickup, and eco-friendly auto recycling.",
  openGraph: {
    title: "Junkyard in Chatham Ontario | KC Auto Recycling",
    description:
      "Sell your junk or scrap car for cash in Chatham. KC Auto Recycling offers fast pickup and eco-friendly recycling.",
    url: "https://kcautorecycling.ca/junkyard-chatham-ontario",
    siteName: "KC Auto Recycling",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "https://kcautorecycling.ca/cashandkey.jpeg",
        width: 1200,
        height: 630,
        alt: "KC Auto Recycling Junkyard Chatham Ontario",
      },
    ],
  },
};

export default function JunkyardChathamOntarioPage() {
  return (
    <main className="prose lg:prose-lg mx-auto px-4 py-10">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "KC Auto Recycling",
            url: "https://kcautorecycling.ca/junkyard-chatham-ontario",
            image: "https://kcautorecycling.ca/cashandkey.jpeg",
            logo: "https://kcautorecycling.ca/logo.png",
            description:
              "KC Auto Recycling is a junkyard and auto recycling center in Chatham, Ontario. We buy scrap cars for cash, provide free pickup, and recycle vehicles responsibly.",
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
            openingHours: ["Mo-Fr 09:00-20:00"],
            sameAs: [
              "https://web.facebook.com/profile.php?id=100064321860658",
              "https://www.yelp.ca/biz/kc-auto-recycling-chatham",
              "https://g.co/kgs/zYXZtYJ",
            ],
            makesOffer: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cash for Cars in Chatham",
                  description:
                    "We pay cash for junk, damaged, and unwanted cars in Chatham, Ontario.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Scrap Car Removal",
                  description:
                    "Free pickup and eco-friendly disposal of scrap vehicles in Chatham and Southwestern Ontario.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Auto Recycling",
                  description:
                    "Eco-friendly recycling and salvage of vehicles and used auto parts.",
                },
              },
            ],
          }),
        }}
      />

      {/* Page Content */}
      <h1>Junkyard & Scrap Car Removal in Chatham, Ontario</h1>
      <p>
        Looking for a <strong>junkyard in Chatham, Ontario</strong> that pays
        top cash for your old or unwanted car? At{" "}
        <strong>KC Auto Recycling</strong>, we provide{" "}
        <strong>scrap car removal, salvage, and eco-friendly recycling</strong>{" "}
        with fast pickup and payment on the spot.
      </p>

      <h2>Why Choose KC Auto Recycling?</h2>
      <ul>
        <li>Top cash offers for junk, damaged, and unwanted vehicles</li>
        <li>Free towing & pickup across Chatham and nearby towns</li>
        <li>Eco-friendly recycling and disposal</li>
        <li>Trusted local service with professional staff</li>
      </ul>

      <h2>Our Services in Chatham</h2>
      <ul>
        <li>
          <strong>Cash for Cars</strong> – Get instant payment for your vehicle
        </li>
        <li>
          <strong>Scrap Car Removal</strong> – Free pickup of junk or damaged
          cars
        </li>
        <li>
          <strong>Salvage & Auto Recycling</strong> – We recycle and reuse
          responsibly
        </li>
        <li>
          <strong>Used Auto Parts</strong> – Affordable, sustainable solutions
        </li>
      </ul>

      <h2>Serving Chatham & Southwestern Ontario</h2>
      <p>
        We proudly serve{" "}
        <strong>Chatham-Kent, Wallaceburg, Tilbury, Blenheim</strong>, and
        nearby areas in Ontario. Wherever you are, we’ll come to you for
        <strong> junk car removal</strong> and <strong>cash payout</strong>.
      </p>

      <h2>Contact KC Auto Recycling</h2>
      <p>
        Ready to sell your junk car? Call us today and get cash in hand quickly.
      </p>
      <p>
        📍 <strong>Address:</strong> 7720 Queen&apos;s Line, Chatham, ON N7M 5T1
        <br />
        📞 <strong>Phone:</strong>{" "}
        <a href="tel:+16475333813">+1-647-533-3813</a>
        <br />
        🌐 <strong>Website:</strong>{" "}
        <a href="https://kcautorecycling.ca">https://kcautorecycling.ca</a>
      </p>
    </main>
  );
}
