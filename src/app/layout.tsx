import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  title: "Balarakesh Gundapaneni | Full-Stack Developer",
  description:
    "Portfolio of Balarakesh Gundapaneni, a full-stack developer building scalable web applications and AI-powered products.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twMerge(
          "bg-gray-900 font-inter text-white antialiased",
          inter.variable,
          calistoga.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
