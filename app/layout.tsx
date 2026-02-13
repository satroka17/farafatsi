import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Association FARAFATSI | Protection AP Ranobe PK32",
  description:
    "FARAFATSI s'engage pour la protection de l'AP PK32 Ranobe et la préservation de l'environnement dans la région Atsimo.",
  keywords: [
    "FARAFATSI",
    "AP Ranobe PK32",
    "Protection environnement",
    "Association environnement Madagascar",
    "Biodiversité Atsimo",
  ],
  authors: [{ name: "Association FARAFATSI" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}