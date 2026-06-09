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
      <ScrollReveal key={dish.title} className="dish">
        <div className="dish-img">
          <Image src={dish.image} alt={dish.imageAlt} fill sizes="360px" />
        </div>
        <div className="dish-body">
          <h3>{dish.title}</h3>
          <p>{dish.description}</p>
        </div>
      </ScrollReveal>
    ))}
    <ScrollReveal className="more">
      <Link href="#menu" className="link-lime">
        {menuContent.moreLink}
      </Link>
    </ScrollReveal>
  </section>
);
