import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "KC Auto-Recycling",
//   description: "webuycarsontario",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>
          Sell Your Used Car for Cash in Ontario, Canada | KC Auto-Recycling
        </title>
        <meta
          name="description"
          content="Get instant cash for your used car in Ontario, Canada with KC Auto-Recycling. We offer hassle-free transactions and top dollar for your vehicle. Contact us today!"
          key="desc"
        />
        <meta
          name="keywords"
          content="we buy cars Ontario, Sell used car Ontario, Canada, cash for cars, buy used cars, sell my car, instant cash, Ontario car buyers"
        />
        <meta
          name="google-site-verification"
          content="FHqc6NCHweS9fG-CcpFj9AA5PPHjwko0r-iXDaQKUK0"
        />
        <link
          rel="canonical"
          href={process.env.NEXT_PUBLIC_SITE_URL}
          key="canonical"
        />
        <link
          rel="alternate"
          href={process.env.NEXT_PUBLIC_SITE_URL}
          hrefLang="en"
        />
        <link
          rel="alternate"
          href={process.env.NEXT_PUBLIC_SITE_URL}
          hrefLang="x-default"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
