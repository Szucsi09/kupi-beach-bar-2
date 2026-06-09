import Image from "next/image";
import { aboutContent } from "@/lib/site-content";
import { ScrollReveal } from "@/components/scroll-reveal";

export const AboutSection = () => (
  <section className="about" id="about">
    <ScrollReveal className="eyebrow">
      <span>{aboutContent.eyebrow}</span>
    </ScrollReveal>
    {aboutContent.paragraphs.map((paragraph, index) => (
      <ScrollReveal key={paragraph}>
        <p>
          {index === 1 ? (
            <>
              Azért vagyunk itt, mert úgy gondoljuk, hogy a vízparton is lehet{" "}
              <strong>valóban jót enni.</strong>
            </>
          ) : (
            paragraph
          )}
        </p>
      </ScrollReveal>
    ))}
    <ScrollReveal variant="reveal-r" className="about-photo photo">
      <Image
        src="/images/kupiBB4.jpg"
        alt={aboutContent.imageAlt}
        fill
        sizes="72vw"
      />
    </ScrollReveal>
  </section>
);
