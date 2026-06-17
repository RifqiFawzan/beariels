import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";

import "./globals.css";


const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Beariel's Diary",
  description: "Beariel's Diary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${bebasNeue.variable}
        ${poppins.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col bg-[#F7EFDF]">
        
        

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}