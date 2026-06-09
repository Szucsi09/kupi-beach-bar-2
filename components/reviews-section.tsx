import { reviewsContent } from "@/lib/site-content";
import { ScrollReveal } from "@/components/scroll-reveal";

export const ReviewsSection = () => (
  <section className="reviews" id="reviews">
    <span className="eyebrow">{reviewsContent.eyebrow}</span>
    {reviewsContent.quotes.map((quote) => (
      <ScrollReveal key={quote.author} className="quote">
        <span className="mark">&ldquo;</span>
        <p>{quote.text}</p>
        <div className="by">
          — <b>{quote.author}</b>, {quote.detail}
        </div>
      </ScrollReveal>
    ))}
  </section>
);
