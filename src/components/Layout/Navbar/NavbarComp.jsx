import React, { useState } from "react";
import { Navbar } from "@nextui-org/react";
import { Logo } from "./Logo.jsx";
import { useTheme } from "@nextui-org/react";
import { useRouter } from "next/router.js";

const navItems = [
  { section: "Home", href: "#home" },
  { section: "About", href: "#about" },
  { section: "Skills", href: "#skills" },
  { section: "Experience", href: "#experience" },
];

const NavbarComp = () => {
  const { asPath } = useRouter();
  const { theme } = useTheme();
  return (
    <Navbar isBordered variant="static" maxWidth="xl">
      <Navbar.Brand>
        <Logo color="#D7CDDB" />
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        variant="underline-rounded"
      >
        {navItems.map((navItem) => (
          <Navbar.Link
            underline
            underlineHeight="extrabold"
            isActive={navItem.href === asPath}
            key={navItem.section}
            href={navItem.href}
          >
            {navItem.section}
          </Navbar.Link>
        ))}
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarComp;
