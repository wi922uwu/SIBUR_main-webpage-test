import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { SmoothScroll } from "@/components/SmoothScroll";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "SIBUR Store",
  description: "Корпоративный магазин СИБУР",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.variable} font-sans antialiased bg-bg-grey text-text-primary`}>
        <Providers>
          <SmoothScroll />
          {children}
        </Providers>
      </body>
    </html>
  );
}
