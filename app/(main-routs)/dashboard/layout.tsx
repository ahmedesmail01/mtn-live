import type { Metadata } from "next";
import "../../globals.css";
import CustomLayout from "./CustomLayout";
import "swiper/css/navigation"; // If you use navigation
import "swiper/css/pagination"; // If you use pagination

import { Poppins } from "next/font/google";

import Providers from "@/app/Providers";
import NextTopLoader from "nextjs-toploader";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //

  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
      </head>
      <body className="font-poppins">
        <Providers>
          <CustomLayout>
            <NextTopLoader />
            {children}
          </CustomLayout>
        </Providers>
      </body>
    </html>
  );
}
