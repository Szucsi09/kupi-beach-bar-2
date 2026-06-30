"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { collageImages, heroContent } from "@/lib/site-content";
import { ScrollReveal } from "@/components/scroll-reveal";

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const pcRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const pcs = pcRefs.current.filter(Boolean) as HTMLDivElement[];
    const timers: number[] = [];

    pcs.forEach((el, i) => {
      const rot = el.dataset.rot || "0";
      el.style.transform = `translateY(28px) rotate(${rot}deg)`;
      timers.push(
        window.setTimeout(() => {
          el.classList.add("in");
          el.style.transform = `translateY(0) rotate(${rot}deg)`;
        }, 180 + i * 130),
      );
    });

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  useEffect(() => {
    const heroEl = heroRef.current;
    const pcs = pcRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!heroEl) return;

    let ticking = false;

    const parallax = () => {
      const rect = heroEl.getBoundingClientRect();
      const progress = rect.top;

      pcs.forEach((el) => {
        const par = parseFloat(el.dataset.par || "0");
        if (!par) return;
        const rot = el.dataset.rot || "0";
        const shift = -progress * par * 0.18;
        el.style.transform = `translateY(${shift}px) rotate(${rot}deg)`;
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(parallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hero" id="hero" ref={heroRef}>
      <div className="collage">
        {collageImages.map((img, index) => (
          <div
            key={img.src}
            ref={(el) => {
              pcRefs.current[index] = el;
            }}
            className={`pc photo ${img.className}`}
            data-rot={img.rot}
            data-par={img.par}
          >
            <Image src={img.src} alt={img.alt} fill sizes="50vw" />
          </div>
        ))}
      </div>
      <ScrollReveal className="hero-h script">
        <h1>
          {heroContent.titleLine1}
          <br />
          {heroContent.titleLine2}
          <br />
          <span className="l2">{heroContent.titleLine3}</span>
        </h1>
      </ScrollReveal>
      <ScrollReveal>
        <Link href="#menu" className="btn">
          {heroContent.cta} <span className="arr">→</span>
        </Link>
      </ScrollReveal>
    </header>
  );
};
