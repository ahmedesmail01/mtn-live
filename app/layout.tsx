import "./globals.css";
import type { Metadata } from "next";
// import Providers from "./Providers";

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

  return <>{children}</>;
}
