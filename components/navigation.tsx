"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { footerContent, navLinks } from "@/lib/site-content";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <nav className="bar">
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
            MENÜ
          </button>
        </div>
      </nav>

      <div className={`menu${isOpen ? " open" : ""}`} id="navMenu">
        <div className="menu-top">
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
            className="menu-close"
            onClick={handleClose}
            aria-label="Bezárás"
          >
            ×
          </button>
        </div>
        <div className="menu-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={handleClose}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="menu-foot">{footerContent.menuFoot}</div>
      </div>
    </>
  );
};
