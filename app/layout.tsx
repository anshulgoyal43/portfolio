import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Ayushi Singhal',
  description: 'Salesforce Marketing Cloud Developer',
  openGraph: {
    title: 'Ayushi Singhal',
    description: 'An overview of my career and technical contributions',
    url: 'https://yourwebsite.com',
    siteName: "Ayushi Singhal's Website",
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ayushiS',
    creator: '@ayushiS',
  },
  metadataBase: new URL('https://yourwebsite.com'),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
