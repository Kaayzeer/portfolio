export const navItems = [
  { section: "Home", href: "#home" },
  { section: "About", href: "#about" },
  { section: "Skills", href: "#skills" },
  { section: "Experience", href: "#experience" },
];

export const removeHTags = () =>
  setTimeout(() => {
    history.replaceState(
      "",
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    );
  }, 1);
