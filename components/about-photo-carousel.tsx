"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type AboutPhoto = {
  src: string;
  alt: string;
};

type AboutPhotoCarouselProps = {
  images: readonly AboutPhoto[];
};

const intervalMs = 3000;

export const AboutPhotoCarousel = ({
  images,
}: AboutPhotoCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    if (images.length <= 1) {
      setIsVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    if (!isVisible) return;
    if (isHoverPaused) return;
    if (isUserPaused) return;

    const timerId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timerId);
  }, [images.length, isHoverPaused, isUserPaused, isVisible]);

  const handleMouseEnter = () => setIsHoverPaused(true);
  const handleMouseLeave = () => setIsHoverPaused(false);

  const handleFocus = () => setIsHoverPaused(true);
  const handleBlur = () => setIsHoverPaused(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    if (key !== "Enter" && key !== " ") return;

    event.preventDefault();
    setIsUserPaused((prev) => !prev);
  };

  if (images.length === 0) return null;

  return (
    <div
      ref={rootRef}
      className="about-photo-stack"
      role="group"
      aria-label="Rólunk képek váltakozása"
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {images.map((img, idx) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes="72vw"
          priority={idx === 0}
          className={
            idx === activeIndex
              ? "about-photo-img about-photo-img-active"
              : "about-photo-img"
          }
        />
      ))}
    </div>
  );
};

