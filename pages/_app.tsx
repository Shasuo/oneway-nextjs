import { Layout } from "@/components/Layout/Layout";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-raleway",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${raleway.variable} font-sans`}
      style={{ fontFamily: "var(--font-raleway)" }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
