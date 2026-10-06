import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tis.edu.in"),
  title: "Tulas International School — Excellence in Education",
  description:
    "Tulas International School (TIS) in Dehradun offers world-class education blending academic excellence with holistic development. CBSE & IB curriculum, state-of-the-art campus, and a nurturing community.",
  keywords:
    "Tulas International School, TIS, Dehradun, CBSE school, IB school, boarding school, best school Dehradun",
  openGraph: {
    title: "Tulas International School — Excellence in Education",
    description:
      "World-class education blending academic excellence with holistic development at TIS Dehradun.",
    url: "https://tis.edu.in",
    siteName: "Tulas International School",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tulas International School Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulas International School — Excellence in Education",
    description:
      "World-class education blending academic excellence with holistic development at TIS Dehradun.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#c9a84c] focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
