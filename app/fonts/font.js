import { Noto_Sans, Baumans, Oswald } from "next/font/google";

export const titleFont = Baumans({
  variable: "--font-title",
  style: "normal",
  subsets: ["latin"],
  weight: ["400"],
});

export const textFont = Oswald({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const buttonFont = Noto_Sans({
  variable: "--font-button",
  subsets: ["latin"],
});
