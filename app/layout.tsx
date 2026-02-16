import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";
import PasskeyGate from "@/components/PasskeyGate";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: ["Ottawa Integrative Nutrition", "Biohacking", "Lyme Support", "Mold Toxicity", "Functional Medicine"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="font-body antialiased">
        <PasskeyGate>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </PasskeyGate>
      </body>
    </html>
  );
}
