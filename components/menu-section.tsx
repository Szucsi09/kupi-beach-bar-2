"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { menuContent } from "@/lib/site-content";
import { ScrollReveal } from "@/components/scroll-reveal";

function DishCard({
  dish,
}: {
  dish: (typeof menuContent.dishes)[number];
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = cardRef.current;
    if (!el) return;
    const isFlipped = el.classList.contains("flipped");
    el.classList.toggle("flipped");
    el.setAttribute("aria-pressed", String(!isFlipped));
    el.setAttribute(
      "aria-label",
      isFlipped
        ? `${dish.title} – Hozzávalók megjelenítése`
        : `${dish.title} – Előlap megjelenítése`,
    );
  };

  const bullets = dish.description
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div
      ref={cardRef}
      className="dish-card"
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      tabIndex={0}
      role="button"
      aria-pressed={false}
      aria-label={`${dish.title} – Hozzávalók megjelenítése`}
    >
      <div className="dish-card-inner">
        {/* FRONT: image + title */}
        <div className="dish-face dish-front">
          <div className="dish-img">
            <Image
              src={dish.image}
              alt={dish.imageAlt}
              fill
              sizes="(max-width: 600px) 92vw, 420px"
            />
          </div>
          <div className="dish-body">
            <h3>{dish.title}</h3>
            <span className="dish-hint">Koppints az összetevőkért</span>
          </div>
        </div>

        {/* BACK: ingredients */}
        <div className="dish-face dish-back">
          <div className="dish-back-inner">
            <p className="dish-back-eyebrow">Hozzávalók</p>
            <div className="dish-back-divider" />
            <ul className="dish-back-list">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span className="dish-back-tap">Koppints vissza</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MenuSection = () => (
  <section className="menu-sec" id="menu">
    <ScrollReveal className="head">
      <h2>{menuContent.title}</h2>
      <p>{menuContent.subtitle}</p>
    </ScrollReveal>

    {menuContent.dishes.map((dish) => (
      <div key={dish.title} className="dish-wrap">
        <ScrollReveal>
          <DishCard dish={dish} />
        </ScrollReveal>
      </div>
    ))}

    <ScrollReveal className="more">
      <Link href="#menu" className="link-lime">
        {menuContent.moreLink}
      </Link>
    </ScrollReveal>
  </section>
);
