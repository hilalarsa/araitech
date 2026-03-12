import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Araitech Dev - Solusi Digital Terpercaya untuk Bisnis Anda",
  description:
    "Araitech Dev adalah agensi pengembangan website profesional. Kami membuat website modern, cepat, dan responsif untuk bisnis dan individu di Indonesia.",
  keywords: [
    "jasa pembuatan website",
    "web developer indonesia",
    "website profesional",
    "araitech",
    "agensi website",
    "jasa web",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Araitech Dev - Solusi Digital Terpercaya",
    description:
      "Wujudkan ide Anda menjadi website profesional bersama Araitech Dev.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
