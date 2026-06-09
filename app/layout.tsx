import type { Metadata, Viewport } from "next";
import { DM_Sans, Pacifico } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});

export const metadata: Metadata = {
  title: "KuPi Beach Bar",
  description:
    "Igazi ételek a vízparton — a KuPi Beach Bar tóparti strandbüféje.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={`${dmSans.variable} ${pacifico.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
