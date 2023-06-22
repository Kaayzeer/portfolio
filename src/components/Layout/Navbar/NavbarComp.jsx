import React from "react";
import { Navbar } from "@nextui-org/react";
import { Logo } from "./Logo.jsx";
import { useTheme } from "@nextui-org/react";

const navItems = [
  { section: "Home", id: "#home", isActive: true },
  { section: "Experience", id: "#experience" },
  { section: "About", id: "#about" },
];

const NavbarComp = () => {
  const { theme } = useTheme();

  return (
    <Navbar isBordered variant="static" maxWidth="xl">
      <Navbar.Brand>
        <Logo color="#D7CDDB" />
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        {navItems.map((navItem) => (
          <Navbar.Link key={navItem.section} href={navItem.href}>
            {navItem.section}
          </Navbar.Link>
        ))}
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarComp;
