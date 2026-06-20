"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const PLAY_DURATION = 3200;
const FADE_DURATION = 750;

export const IntroOverlay = () => {
  const [mounted, setMounted] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const dismissedRef = useRef(false);

  const dismiss = useCallback(() => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    setLeaving(true);
    window.setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
    }, FADE_DURATION);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Lock scroll while the intro is on screen.
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const playFor = reduceMotion ? 1100 : PLAY_DURATION;
    const timer = window.setTimeout(dismiss, playFor);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [dismiss]);

  if (!mounted) return null;

  return (
    <div
      className={`site-intro${leaving ? " site-intro-leaving" : ""}`}
      role="presentation"
      onClick={dismiss}
    >
      <div className="intro-bg" aria-hidden="true">
        <span className="intro-wave intro-wave-1" />
        <span className="intro-wave intro-wave-2" />
        <span className="intro-wave intro-wave-3" />
      </div>

      <div className="intro-inner">
        <p className="intro-eyebrow">Üdvözöl a</p>

        <div className="intro-logo">
          <Image
            src="/images/logo.png"
            alt="KuPi Beach Bar"
            width={520}
            height={300}
            priority
          />
        </div>

        <h1 className="intro-tagline script">
          Prémium fogások
          <br />
          <span className="intro-tagline-accent">a tóparton</span>
        </h1>

        <p className="intro-sub">Tóparti strandbüfé · Kunfehértó</p>
      </div>

      <span className="intro-skip">Koppints a továbblépéshez</span>
    </div>
  );
};
