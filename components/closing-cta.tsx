import Image from "next/image";
import Link from "next/link";
import { closingContent } from "@/lib/site-content";
import { ScrollReveal } from "@/components/scroll-reveal";

export const ClosingCta = () => (
  <ScrollReveal variant="zoomy" className="closing">
    <Image
      src="/images/kupiBB9.jpg"
      alt={closingContent.imageAlt}
      fill
      sizes="100vw"
    />
    <div className="ov">
      <h2>{closingContent.title}</h2>
      <Link href="#menu" className="btn">
        {closingContent.cta} <span className="arr">→</span>
      </Link>
    </div>
  </ScrollReveal>
);
