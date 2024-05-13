"use client"
import { useEffect } from "react";
import TextSVG from "@/components/TextSVG";
import Lenis from 'lenis'
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-screen "></div>
      <TextSVG></TextSVG>
      <div className="h-screen "></div>
    </main>
  );
}
