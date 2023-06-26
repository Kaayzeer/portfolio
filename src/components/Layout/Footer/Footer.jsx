import React from "react";
import SocialMediaIcons from "@/components/Common/SocialMediaIcons/SocialMediaIcons";
import FooterNav from "./FooterNav";
import { FooterContainer } from "@/components/Layout/Container";
import * as styled from "./styles";

const Footer = () => {
  return (
    <FooterContainer cols="1" bgColor="$myTertiary">
      <footer style={styled.Footer}>
        <SocialMediaIcons />
        <FooterNav />
      </footer>
    </FooterContainer>
  );
};

export default Footer;
