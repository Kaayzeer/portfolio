import Avatars from '../Avatars/Avatars';
import { Text } from '@nextui-org/react';
import * as I from '@/components/Common/TechIcons';
import { IconsContainer, IconsWrapper } from './styled';

const socialLinks = [
  {
    title: <I.LinkedInIcon />,
    alt: 'linkedIn-link',
  },
  {
    title: <I.GithubIcon />,
    alt: 'github-link',
  },
  {
    title: <I.GmailIcon />,
    alt: 'gmail-link',
  },
];

const SocialMediaIcons = () => {
  return (
    <Text as='div' css={IconsContainer}>
      <Text as='div' css={IconsWrapper}>
        {socialLinks.map((link) => (
          <Avatars>{link.title}</Avatars>
        ))}
      </Text>
    </Text>
  );
};

export default SocialMediaIcons;
