import "@/public/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { i18n, Locale } from "@/lib/i18n-config";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Gonzalez - Software Engineer",
  description: "Personal website of Luis Gonzalez, Software Engineer",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${inter.className} bg-noisy-v2 flex flex-col items-center justify-center min-h-screen border-16 border-white border-solid`}
      >
        <Header lang={params.lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
