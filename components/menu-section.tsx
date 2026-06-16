"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 14a8 8 0 0 1-8 8" />
      <path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" />
      <path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
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
            <p className="dish-back-eyebrow">{dish.title}</p>
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
  const [barVisible, setBarVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const activeCategory =
    menuContent.categories.find((c) => c.id === activeId) ??
    menuContent.categories[0];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setBarVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -45% 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleCategoryChange = useCallback((categoryId: CategoryId) => {
    setActiveId(categoryId);

    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const navEl = document.querySelector("nav.bar") as HTMLElement | null;
    const navHeight = navEl?.offsetHeight ?? 0;
    const sectionTop = sectionEl.getBoundingClientRect().top + window.scrollY;
    const targetTop = Math.max(sectionTop - navHeight, 0);

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="menu-sec" id="menu" ref={sectionRef}>
      <ScrollReveal className="head">
        <h2>{menuContent.title}</h2>
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

      <div
        className={`menu-popup-bar${barVisible ? " visible" : ""}`}
        aria-hidden={!barVisible}
      >
        <div
          className="menu-popup-inner"
          role="tablist"
          aria-label="Menü kategóriák"
        >
          {menuContent.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={cat.id === activeId}
              tabIndex={barVisible ? 0 : -1}
              className={`menu-popup-tab${cat.id === activeId ? " active" : ""}`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
