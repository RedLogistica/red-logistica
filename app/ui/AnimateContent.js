"use client";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

/*** Activador de animaciones con AOS
 @AosInit
 ****/
export default function AnimateContent({ content }) {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  },[]);
  return <>{content}</>;
}
