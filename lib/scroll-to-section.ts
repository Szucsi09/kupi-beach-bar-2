export const getNavHeight = () => {
  const navEl = document.querySelector("nav.bar");
  if (navEl instanceof HTMLElement) {
    return navEl.offsetHeight;
  }

  const cssValue = getComputedStyle(document.documentElement).getPropertyValue(
    "--nav-height",
  );
  const parsed = Number.parseFloat(cssValue);

  return Number.isFinite(parsed) ? parsed : 68;
};

export const scrollToSection = (targetEl: HTMLElement) => {
  const navHeight = getNavHeight();
  const top =
    targetEl.getBoundingClientRect().top + window.scrollY - navHeight;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });
};
