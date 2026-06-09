import Image from "next/image";
import { footerContent } from "@/lib/site-content";

export const Footer = () => (
  <footer>
    <Image
      className="foot-logo"
      src="/images/logo.png"
      alt="KuPi Beach Bar"
      width={160}
      height={56}
    />
    <div className="socials">
      <a href="#" aria-label="Facebook">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M14 9h3l.5-3.5H14V3.6c0-1 .3-1.7 1.8-1.7H18V-.2C17.6-.3 16.4-.4 15-.4c-2.9 0-4.8 1.7-4.8 4.9V5.5H7V9h3.2v9H14V9z"
            transform="translate(0 2)"
          />
        </svg>
      </a>
      <a href="#" aria-label="Instagram">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
    <div className="copy">{footerContent.copyright}</div>
  </footer>
);
