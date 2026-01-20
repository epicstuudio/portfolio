import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "../styles/themes/summer.css";
import "../styles/themes/winter.css";
import "../styles/themes/autumn.css";
import "../styles/themes/spring.css";
import "../styles/themes/cosmos.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Product Designer",
  description: "Product Designer with 8+ years of experience creating impactful digital experiences.",
  keywords: ["product design", "UX design", "UI design", "portfolio", "case studies"],
  authors: [{ name: "Product Designer" }],
  openGraph: {
    title: "Portfolio | Product Designer",
    description: "Product Designer with 8+ years of experience creating impactful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="summer" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
