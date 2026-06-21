import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import InstitutionalHeader from "@/components/InstitutionalHeader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Government College of Engineering, Erode (GCEE)",
  description: "Official Website of Government College of Engineering, Erode (formerly IRTT). High-quality engineering education and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${openSans.variable} antialiased overflow-x-hidden`}
      >
        <InstitutionalHeader />
        {children}
      </body>
    </html>
  );
}
