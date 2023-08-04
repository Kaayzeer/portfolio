import Avatars from "../Avatars/Avatars";
import { Text } from "@nextui-org/react";
import * as I from "@/components/Common/Icons";
import * as styled from "./styled";
import Link from "next/link";

const socialLinks = [
  {
    title: <I.LinkedInIcon />,
    alt: "linkedIn-link",
    href: "https://linkedin.com/in/nikolasr",
  },
  {
    title: <I.GithubIcon />,
    alt: "github-link",
    href: "https://github.com/Kaayzeer",
  },
  {
    title: <I.GmailIcon />,
    alt: "gmail-link",
    href: "mailto:nmrb60@gmail.com",
  },
];

const SocialMediaIcons = ({ gap }) => {
  return (
    <Text as="div" css={styled.IconsContainer}>
      <Text as="div" css={styled.IconsWrapper(gap)}>
        {socialLinks.map((link) => (
          <Avatars key={link.alt} cursor="pointer">
            <Link target="_blank" rel="noopener noreferrer" href={link.href}>
              {link.title}
            </Link>
          </Avatars>
        ))}
      </Text>
    </Text>
  );
};

export default SocialMediaIcons;
