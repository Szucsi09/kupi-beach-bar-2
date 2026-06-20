"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useState } from "react";
import { navLinks } from "@/lib/site-content";
import { scrollToSection } from "@/lib/scroll-to-section";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const navEl = document.querySelector("nav.bar");
    if (!(navEl instanceof HTMLElement)) return;

    const setNavHeight = () => {
      document.documentElement.style.setProperty(
        "--nav-height",
        `${navEl.offsetHeight}px`,
      );
    };

    setNavHeight();

    const resizeObserver = new ResizeObserver(setNavHeight);
    resizeObserver.observe(navEl);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const handleNavLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;

      event.preventDefault();
      handleClose();

      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      scrollToSection(targetEl);
    },
    [handleClose],
  );

  return (
    <>
      <nav className={`bar${isAtTop ? " at-top" : ""}`}>
        <div className="bar-inner">
          <Image
            className="nav-logo"
            src="/images/logo.png"
            alt="KuPi Beach Bar"
            width={120}
            height={38}
            priority
          />
          <button
            type="button"
            className="hamb"
            onClick={handleOpen}
            aria-label="Menü"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-overlay${isOpen ? " open" : ""}`} id="navMenu">
        <div className="nav-overlay-top">
          <Image
            className="nav-logo"
            src="/images/logo.png"
            alt="KuPi Beach Bar"
            width={120}
            height={42}
            style={{ height: 42 }}
          />
          <button
            type="button"
            className="nav-overlay-close"
            onClick={handleClose}
            aria-label="Bezárás"
          >
            ×
          </button>
        </div>
        <div className="nav-overlay-links">
          {navLinks.map((link, index) => (
            <Fragment key={link.href}>
              <Link
                href={link.href}
                style={{ animationDelay: `${0.1 + index * 0.07}s` }}
                onClick={(event) => handleNavLinkClick(event, link.href)}
              >
                {link.label}
              </Link>
              <div className="nav-overlay-divider" aria-hidden="true" />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
