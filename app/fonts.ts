import { DM_Sans, DM_Serif_Display } from "next/font/google";

export const dmsans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const dmserif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const fontClasses = `${dmsans.variable} ${dmserif.variable}`;
