import React, { useState, useEffect } from "react";
import { Navbar, Link } from "@nextui-org/react";
import { Logo } from "./Logo.jsx";
import { useRouter } from "next/router.js";
import { navItems, removeHTags } from "./navConstants.js";
import * as styles from "./styles.js";

const NavbarComp = () => {
  const { asPath } = useRouter();
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [toggleNav]);

  return (
    <Navbar maxWidth="xl" css={styles.Navbar}>
      <Navbar.Brand>
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-label="toggle navigation"
        showIn="xs"
        onChange={(e) => setToggleNav(e)}
      />
      <Navbar.Collapse
        css={{
          background: "$white",
          backdropFilter: "saturate(100%) blur(2px)",
        }}
      >
        {navItems.map((navItem) => (
          <Navbar.CollapseItem
            key={navItem.section}
            onClick={() => setToggleNav(false)}
          >
            <Link
              css={{ color: "$myTertiary" }}
              isActive={navItem.href === asPath}
              href={navItem.href}
              onClick={removeHTags}
            >
              {navItem.section}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        variant="underline-rounded"
      >
        {navItems.map((navItem) => (
          <Navbar.Link
            underlineHeight="extrabold"
            isActive={navItem.href === asPath}
            key={navItem.section}
            href={navItem.href}
            onClick={removeHTags}
          >
            {navItem.section}
          </Navbar.Link>
        ))}
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarComp;
