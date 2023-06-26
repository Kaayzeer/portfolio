export const navItems = [
  { section: "Home", href: "#home" },
  { section: "Skills", href: "#skills" },
  { section: "About", href: "#about" },
  { section: "Work", href: "#experience" },
];

export const removeHTags = () =>
  setTimeout(() => {
    history.replaceState(
      "",
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    );
  }, 1);
