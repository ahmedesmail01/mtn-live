import type { Metadata } from "next";
import "../../globals.css";

import { Poppins } from "next/font/google";

//
const poppins = Poppins({
  subsets: ["latin"], // Adjust based on your needs
  weight: ["400", "500", "600", "700"], // Define required font weights
  variable: "--font-poppins", // Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "MTN LIVE",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //

  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-poppins">{children}</body>
    </html>
  );
}
