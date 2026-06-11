import Image from "next/image";
import Link from "next/link";
import { menuContent } from "@/lib/site-content";
import { ScrollReveal } from "@/components/scroll-reveal";

export const MenuSection = () => (
  <section className="menu-sec" id="menu">
    <ScrollReveal className="head">
      <h2>{menuContent.title}</h2>
      <p>{menuContent.subtitle}</p>
    </ScrollReveal>
    {menuContent.dishes.map((dish) => (
      <div key={dish.title} className="dish-wrap">
        <ScrollReveal className="dish-card" tabIndex={0} aria-label={`${dish.title} – ${dish.description}`}>
          <div className="dish-card-inner">
            {/* FRONT: image + title */}
            <div className="dish-face dish-front">
              <div className="dish-img">
                <Image src={dish.image} alt={dish.imageAlt} fill sizes="(max-width: 600px) 92vw, 420px" />
              </div>
              <div className="dish-body">
                <h3>{dish.title}</h3>
              </div>
            </div>
            {/* BACK: ingredients */}
            <div className="dish-face dish-back">
              <div className="dish-back-inner">
                <p className="dish-back-label">Hozzávalók</p>
                <p>{dish.description}</p>
              </div>
            </div>
          </div>
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
