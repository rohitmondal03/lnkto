import { type Metadata } from "next";
import { Montserrat } from "next/font/google"
import { SWRConfig, SWRConfiguration } from "swr"

import type { TLayout } from "@/lib/types";
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/shared/navbar";

import "@/styles/globals.css";


const montserrratFont = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
  fallback: ["serif"]
})


export const metadata: Metadata = {
  title: "lnkto",
  description: "Generated by create-t3-app",
};


const swrConfig: SWRConfiguration = {
  refreshInterval: 3000,
  fetcher: (res, init) => fetch(res, init).then(data => data.json()),
}


export default function RootLayout({ children }: TLayout) {
  return (
    <html
      lang="en"
      className={montserrratFont.className}
    >
      <SWRConfig value={swrConfig}>
        <body>
          <Navbar />
          <main className="px-3 sm:px-8 lg:px-12 py-16">
            {children}
          </main>
          <Toaster />
        </body>
      </SWRConfig>
    </html>
  );
}
