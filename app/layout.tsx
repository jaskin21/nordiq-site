import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Preloader } from "@/components/layout/preloader";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "nordiq solutions",
  description:
    "AI consulting with business first. Analysis, prioritization, implementation and follow-up.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased bg-navy-deep`}
    >
      <body className="antialiased bg-navy-deep min-h-screen">
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
