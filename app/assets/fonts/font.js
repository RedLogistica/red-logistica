import { Noto_Sans, Baumans, Oswald, Archivo, DM_Serif_Text , News_Cycle, Montserrat} from "next/font/google";

export const titleFont = News_Cycle({
  variable: "--font-title",
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const textFont = Montserrat({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const buttonFont = Noto_Sans({
  variable: "--font-button",
  subsets: ["latin"],
});
