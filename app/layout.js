import { titleFont, textFont, buttonFont } from "./assets/fonts/font";
import DesktopNav from "@/components/DesktopNav";
import Footer from "@/components/Footer";
import ToTopButton from "@/components/button/ToTopButton";
import "./assets/styles/globals.css";
import { layoutMetadata } from "./utils/metadata/metaLayout";

export const metadata = { ...layoutMetadata };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body data-theme="nord" className={`${titleFont.variable} ${textFont.variable} ${buttonFont.variable}`}>
        <DesktopNav />
        {children}
        <ToTopButton />
        <Footer />
      </body>
    </html>
  );
}
