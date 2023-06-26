import React from "react";
import { Navbar } from "@nextui-org/react";
import { Logo } from "./Logo.jsx";
import { useTheme } from "@nextui-org/react";
import { useRouter } from "next/router.js";
import { navItems, removeHTags } from "./navConstants.js";
import * as styles from "./styles.js";

const NavbarComp = () => {
  const { asPath } = useRouter();
  const { theme } = useTheme();

  return (
    <Navbar isBordered maxWidth="xl" css={styles.Navbar}>
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
