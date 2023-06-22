import React from 'react';
import Image from 'next/image';
import WorkingSpace from '../../../../public/images/working-space.jpg';
import { Text } from '@nextui-org/react';
import PageContainer, {
  PageNoPaddingContainer,
} from '@/components/Layout/Container';
import { responsive } from '@/styles/styles';
import * as styled from './styles';
import { STRING_TYPES } from '@/components/strings';

const About = () => {
  return (
    <>
      <PageNoPaddingContainer cols='1'>
        <Text as='article' css={styled.HeadingWrapper}>
          <Text h3 css={styled.Heading}>
            {STRING_TYPES.ABOUT_TITLE}
          </Text>
        </Text>
      </PageNoPaddingContainer>
      <PageContainer>
        <Text as='picture' css={styled.ImageContainer}>
          <Image
            src={WorkingSpace}
            alt='working-space'
            style={styled.Img}
            placeholder='blur'
            sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
          />
        </Text>
        <Text as='article' css={styled.Article}>
          <Text h4 css={styled.SubTitle}>
            {STRING_TYPES.ABOUT_SUBTITLE}
          </Text>
          <Text>{STRING_TYPES.ABOUT_BODY}</Text>
        </Text>
      </PageContainer>
    </>
  );
};

export default About;
