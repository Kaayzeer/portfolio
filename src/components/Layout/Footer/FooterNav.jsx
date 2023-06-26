import React from "react";
import { Text } from "@nextui-org/react";
import { useRouter } from "next/router.js";
import { navItems, removeHTags } from "../Navbar/navConstants";
import * as styled from "./styles";

const FooterNav = () => {
  return (
    <Text as="div">
      <Text as="ul" css={styled.Ul}>
        {navItems.map((navItem) => (
          <Text
            as="li"
            key={navItem.section}
            onClick={removeHTags}
            css={styled.Li}
          >
            <Text as="a" href={navItem.href} css={styled.A}>
              {navItem.section}
            </Text>
          </Text>
        ))}
      </Text>
    </Text>
  );
};

export default FooterNav;
