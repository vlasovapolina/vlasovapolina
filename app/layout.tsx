import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Polina Vlasova — UI/UX & Graphic Designer",
  description: "UI/UX & Graphic Designer based in Warsaw. 9 years of experience across product design, brand identity, and web.",
  openGraph: {
    title: "Polina Vlasova — UI/UX & Graphic Designer",
    description: "UI/UX & Graphic Designer based in Warsaw.",
    url: "https://vlasovapolina.com",
    siteName: "Polina Vlasova",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter Tight', system-ui, sans-serif" }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
