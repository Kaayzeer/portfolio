import Avatars from "../Avatars/Avatars";
import { Text } from "@nextui-org/react";
import * as I from "@/components/Common/TechIcons";
import * as styled from "./styled";

const socialLinks = [
  {
    title: <I.LinkedInIcon />,
    alt: "linkedIn-link",
  },
  {
    title: <I.GithubIcon />,
    alt: "github-link",
  },
  {
    title: <I.GmailIcon />,
    alt: "gmail-link",
  },
];

const SocialMediaIcons = () => {
  return (
    <Text as="div" css={styled.IconsContainer}>
      <Text as="div" css={styled.IconsWrapper}>
        {socialLinks.map((link) => (
          <Avatars cursor="pointer">{link.title}</Avatars>
        ))}
      </Text>
    </Text>
  );
};

export default SocialMediaIcons;
