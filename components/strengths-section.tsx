import Image from "next/image";
import { strengths } from "@/lib/site-content";
import { ScrollReveal } from "@/components/scroll-reveal";

export const StrengthsSection = () => (
  <section className="strengths">
    {strengths.map((item) => (
      <ScrollReveal
        key={item.num}
        variant={item.reverse ? "reveal-r" : "reveal-l"}
        className={`str-row${item.reverse ? " rev" : ""}`}
      >
        <div className="str-text">
          <div className="str-num">{item.num}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        {"hasImage" in item && item.hasImage ? (
          <div className={`str-img photo ${item.rotationClass}`}>
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="40vw"
            />
          </div>
        ) : (
          <div className="str-accent">
            <span />
          </div>
        )}
      </ScrollReveal>
    ))}
  </section>
);
