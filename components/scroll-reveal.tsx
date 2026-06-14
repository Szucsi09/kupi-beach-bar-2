"use client";

import { useEffect, useRef } from "react";

type RevealVariant = "reveal" | "reveal-l" | "reveal-r" | "zoomy";

type ScrollRevealProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  variant?: RevealVariant;
  className?: string;
};

export const ScrollReveal = ({
  children,
  variant = "reveal",
  className = "",
  ...rest
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  const combinedClassName = [variant, className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={combinedClassName} {...rest}>
      {children}
    </div>
  );
};
