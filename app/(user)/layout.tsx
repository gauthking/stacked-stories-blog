import Navbar from "@/components/Navbar";
import "../../styles/globals.css";
import { Titillium_Web } from "next/font/google";
import { Signika_Negative } from "next/font/google";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";

import { token } from "../../utils/sanity.fetch";
const PreviewProvider = dynamic(
  () => import("../../components/PreviewProvider")
);

const TitilliumWsb = Titillium_Web({
  subsets: ["latin"],
  display: "block",
  variable: "--font-titilium_web_sb",
  weight: "600",
});

const TitilliumWb = Titillium_Web({
  subsets: ["latin"],
  display: "block",
  variable: "--font-titilium_web_b",
  weight: "700",
});

const SignikaN = Signika_Negative({
  subsets: ["latin"],
  display: "block",
  variable: "--font-signika_negative",
  weight: "300",
});

export const metadata = {
  title: "stacked-stories",
  description: "customized blog page created with 💖 by gauthking!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(draftMode().isEnabled);

  return (
    <html
      lang="en"
      className={`${TitilliumWsb.variable} ${SignikaN.variable} ${TitilliumWb.variable}`}
    >
      {/* <body className="bg-gradient-to-b from-white via-gray-100 to-gray-400 min-h-screen">
        <Navbar />
        <Hero />
        {children}
      </body> */}
      <body className="max-w-7xl mx-auto bg-[#262730] min-h-screen">
        <Navbar />
        {draftMode().isEnabled ? (
          <PreviewProvider token={token}>
            preview mode - {children}
          </PreviewProvider>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
