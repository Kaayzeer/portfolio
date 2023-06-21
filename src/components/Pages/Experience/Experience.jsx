import React, { Fragment } from 'react';
import Image from 'next/image';
import { Text, Button } from '@nextui-org/react';
import { experiences } from './experiences';
import { responsive } from '@/styles/styles';
import {
  HeadingStyles,
  ImageContainerStyles,
  ImageStyles,
  ArticleStylesEven,
  ArticleStylesOdd,
  HeadingWrapperStyles,
  CardTitleStyles,
  ButtonStyles,
} from './styles';
import useMediaQuery from '@/hooks/useMediaQuery';
import PageContainer, {
  PageNoPaddingContainer,
} from '@/components/Layout/Container';
import { STRING_TYPES } from '@/components/strings';

const isTabletReverseRow = (experience, index, isTablet) => {
  return (
    <Fragment key={experience.title}>
      {isTablet && index % 2 !== 0 ? (
        <>
          <Text as='div' css={ArticleStylesOdd}>
            <Text h3 css={CardTitleStyles}>
              {experience.title}
            </Text>
            <Text>{experience.body}</Text>
            <Button
              color='warning'
              css={ButtonStyles}
              bordered
              borderWeight='extrabold'
              href={experience.linkHref}
            >
              {experience.buttonText}
            </Button>
          </Text>
          <Text as='div' css={ImageContainerStyles}>
            <Image
              src={experience.image}
              alt={experience.imageAlt}
              style={ImageStyles}
              placeholder='blur'
              sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
            />
          </Text>
        </>
      ) : (
        <>
          <Text as='div' css={ImageContainerStyles}>
            <Image
              src={experience.image}
              alt={experience.imageAlt}
              style={ImageStyles}
              placeholder='blur'
              sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
            />
          </Text>
          <Text as='div' css={ArticleStylesEven}>
            <Text h3 css={CardTitleStyles}>
              {experience.title}
            </Text>
            <Text>{experience.body}</Text>
            <Button
              as='a'
              color='warning'
              bordered
              borderWeight='extrabold'
              css={ButtonStyles}
              href={experience.linkHref}
            >
              {experience.buttonText}
            </Button>
          </Text>
        </>
      )}
    </Fragment>
  );
};

const Experience = () => {
  const isTablet = useMediaQuery(responsive.tablet);
  return (
    <>
      <PageNoPaddingContainer cols='1'>
        <Text as='div' css={HeadingWrapperStyles}>
          <Text h3 css={HeadingStyles}>
            {STRING_TYPES.EXPERIENCE_TITLE}
          </Text>
        </Text>
      </PageNoPaddingContainer>
      <PageContainer>
        {experiences.map((experience, idx) =>
          isTabletReverseRow(experience, idx, isTablet)
        )}
      </PageContainer>
    </>
  );
};

export default Experience;
