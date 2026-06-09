import Image from "next/image";
import { fullwidthBreak } from "@/lib/site-content";
import { ScrollReveal } from "@/components/scroll-reveal";

export const FullwidthBreak = () => (
  <ScrollReveal variant="zoomy" className="full">
    <Image
      src="/images/kupiBB5.jpg"
      alt={fullwidthBreak.imageAlt}
      fill
      sizes="100vw"
    />
    <div className="float-card">{fullwidthBreak.floatCard}</div>
  </ScrollReveal>
);
