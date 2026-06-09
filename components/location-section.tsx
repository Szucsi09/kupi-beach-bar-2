import { locationContent } from "@/lib/site-content";
import { ScrollReveal } from "@/components/scroll-reveal";

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
    <circle cx="12" cy="9" r="2.4" />
  </svg>
);

export const LocationSection = () => (
  <section className="loc" id="location">
    <ScrollReveal className="script">
      <h2>{locationContent.title}</h2>
    </ScrollReveal>
    <ScrollReveal className="intro">
      <p>{locationContent.intro}</p>
    </ScrollReveal>
    <ScrollReveal className="hours">
      {locationContent.hours.map((row, index) => (
        <div key={row.label} className="row">
          <div className="ic">
            {index === 2 ? <PinIcon /> : <ClockIcon />}
          </div>
          <div className="lbl">{row.label}</div>
          <div className="val">{row.value}</div>
        </div>
      ))}
    </ScrollReveal>
    <ScrollReveal className="map">
      <div className="pin">
        <PinIcon />
        KuPi Beach Bar
      </div>
    </ScrollReveal>
    <ScrollReveal className="addr">
      <b>{locationContent.address.name}</b>
      <br />
      {locationContent.address.street}
      <br />
      {locationContent.address.phone}
    </ScrollReveal>
  </section>
);
