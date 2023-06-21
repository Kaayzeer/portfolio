import React from 'react';
import Image from 'next/image';
import WorkingSpace from '../../../../public/images/working-space.jpg';
import { Text } from '@nextui-org/react';
import PageContainer, {
  PageNoPaddingContainer,
} from '@/components/Layout/Container';
import { responsive } from '@/styles/styles';
import {
  HeadingWrapperStyles,
  HeadingStyles,
  ArticleStyles,
  ImageContainerStyles,
  ImageStyles,
} from './styles';
import { STRING_TYPES } from '@/components/strings';

const About = () => {
  return (
    <>
      <PageNoPaddingContainer cols='1'>
        <Text as='div' css={HeadingWrapperStyles}>
          <Text h3 css={HeadingStyles}>
            {STRING_TYPES.ABOUT_TITLE}
          </Text>
        </Text>
      </PageNoPaddingContainer>
      <PageContainer>
        <Text as='div' css={ImageContainerStyles}>
          <Image
            src={WorkingSpace}
            alt='working-space'
            style={ImageStyles}
            placeholder='blur'
            sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
          />
        </Text>
        <Text as='div' css={ArticleStyles}>
          <Text>{STRING_TYPES.ABOUT_BODY}</Text>
        </Text>
      </PageContainer>
    </>
  );
};

export default About;
