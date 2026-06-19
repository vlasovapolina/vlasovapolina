import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polina Vlasova — UI/UX & Brand Designer",
  description: "Warsaw-based designer with 9 years of experience across UI/UX, brand, and communication design.",
  openGraph: {
    title: "Polina Vlasova — UI/UX & Brand Designer",
    description: "Warsaw-based designer with 9 years of experience across UI/UX, brand, and communication design.",
    url: "https://vlasovapolina.com",
    siteName: "Polina Vlasova",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
