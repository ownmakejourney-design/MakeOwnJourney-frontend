import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Providers from "./providers";
import "./global.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import FaqBot from "@/components/FaqBot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MakeOwnJourney",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable}
          ${inter.variable}
          bg-background text-text 
          antialiased
          font-poppins
        `}
      >
        <Providers>
          <Navbar />
          <main className="mt-150">
            {children}
          </main>
          <FaqBot />
          
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
