import React from "react";
import SocialMediaIcons from "@/components/Common/SocialMediaIcons/SocialMediaIcons";
import FooterNav from "./FooterNav";
import { FooterContainer } from "@/components/Layout/Container";
import * as styled from "./styles";
import { Text } from "@nextui-org/react";
import { STRING_TYPES } from "@/components/strings";

const Footer = () => {
  return (
    <FooterContainer cols="1" bgColor="$myTertiary">
      <Text as="footer" style={styled.Footer}>
        <SocialMediaIcons gap="2.5rem" />
        <FooterNav />
        <Text as="article">
          <Text as="h4" css={styled.Body}>
            {STRING_TYPES.FOOTER_BODY}
          </Text>
        </Text>
      </Text>
    </FooterContainer>
  );
};

export default Footer;
