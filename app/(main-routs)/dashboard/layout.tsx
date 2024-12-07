import type { Metadata } from "next";
import "../../globals.css";
import CustomLayout from "./CustomLayout";
import "swiper/css/navigation"; // If you use navigation
import "swiper/css/pagination"; // If you use pagination

import Providers from "@/app/Providers";
import NextTopLoader from "nextjs-toploader";

//

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
    <Providers>
      <CustomLayout>
        <NextTopLoader />
        {children}
      </CustomLayout>
    </Providers>
  );
}
