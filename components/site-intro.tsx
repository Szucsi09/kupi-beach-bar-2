"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroContent } from "@/lib/site-content";

type IntroPhase = "enter" | "shrink" | "hide" | "done";

export const SiteIntro = () => {
  const [phase, setPhase] = useState<IntroPhase>("enter");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setPhase("done");
      return;
    }

    document.body.style.overflow = "hidden";

    const timers: number[] = [];
    // Hold the full-screen logo + title, then shrink/slide into place.
    timers.push(window.setTimeout(() => setPhase("shrink"), 1500));
    // Fade the overlay away once elements have travelled to their spots.
    timers.push(window.setTimeout(() => setPhase("hide"), 2700));
    // Unmount and restore scrolling.
    timers.push(
      window.setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "";
      }, 3400),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`site-intro ${phase}`} aria-hidden="true">
      <div className="site-intro-logo">
        <Image
          src="/images/logo.png"
          alt="KuPi Beach Bar"
          width={1483}
          height={838}
          priority
        />
      </div>
      <div className="site-intro-title script">
        <h1>
          {heroContent.titleLine1}
          <br />
          <span className="l2">{heroContent.titleLine2}</span>
        </h1>
      </div>
    </div>
  );
};
