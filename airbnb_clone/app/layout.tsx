import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import { I18nProvider } from "./i18n/I18nProvider";
import "./tailwind.css";

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StayNest",
  description: "StayNest booking interface built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-gradient-to-b from-amber-50 via-orange-50 to-stone-100 text-slate-800 font-[family-name:var(--font-body)]">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
