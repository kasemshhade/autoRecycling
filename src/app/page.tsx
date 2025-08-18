import Head from "next/head";
import Image from "next/image";
import { TestingPage } from "./components/TestingPage";

export default function Home() {
  return (
    <div>
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
          content="Sell used car Ontario, Canada, cash for cars, buy used cars, sell my car, instant cash, Ontario car buyers"
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

      <TestingPage />
    </div>
  );
}
