"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { menuContent } from "@/lib/site-content";
import { ScrollReveal } from "@/components/scroll-reveal";

type Dish = (typeof menuContent.categories)[number]["dishes"][number];

function PointingHandIcon() {
  return (
    <svg
      className="dish-hint-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12" />
      <path d="M11 12V4a1.5 1.5 0 0 1 3 0v8" />
      <path d="M14 11.5a1.5 1.5 0 0 1 3 0V13" />
      <path d="M17 12.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2.5a6 6 0 0 1-4.3-1.8l-3.6-3.7a1.5 1.5 0 0 1 2.1-2.1L8 16" />
    </svg>
  );
}

function DishCard({ dish }: { dish: Dish }) {
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
            <span className="dish-hint" aria-label="Koppints az összetevőkért">
              <PointingHandIcon />
            </span>
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

type CategoryId = (typeof menuContent.categories)[number]["id"];

export const MenuSection = () => {
  const [activeId, setActiveId] = useState<CategoryId>(
    menuContent.categories[0].id,
  );
  const activeCategory =
    menuContent.categories.find((c) => c.id === activeId) ??
    menuContent.categories[0];

  return (
    <section className="menu-sec" id="menu">
      <ScrollReveal className="head">
        <h2>{menuContent.title}</h2>
        <p>{menuContent.subtitle}</p>
      </ScrollReveal>

      <ScrollReveal className="menu-tabs-wrap">
        <div className="menu-tabs" role="tablist" aria-label="Menü kategóriák">
          {menuContent.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={cat.id === activeId}
              className={`menu-tab${cat.id === activeId ? " active" : ""}`}
              onClick={() => setActiveId(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="dish-grid">
        {activeCategory.dishes.map((dish) => (
          <div key={dish.title} className="dish-wrap">
            <ScrollReveal>
              <DishCard dish={dish} />
            </ScrollReveal>
          </div>
        ))}
      </div>

      <ScrollReveal className="more">
        <Link href="#menu" className="link-lime">
          {menuContent.moreLink}
        </Link>
      </ScrollReveal>
    </section>
  );
};
