import React, { Fragment } from "react";
import Image from "next/image";
import { Text } from "@nextui-org/react";
import { experiences } from "./experiences";
import { responsive } from "@/styles/styles";
import * as styled from "./styles";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  PageNoPaddingContainer,
  ExperienceContainer,
} from "@/components/Layout/Container";
import { STRING_TYPES } from "@/components/strings";

const isTabletReverseRow = (experience, index, isTabletL) => {
  return (
    <Fragment key={experience.title}>
      {isTabletL && index % 2 !== 0 ? (
        <>
          <Text as="article" css={styled.ArticleOdd}>
            <Text h4 css={styled.CardTitle}>
              {experience.title}
            </Text>
            <Text>{experience.body}</Text>
            <Text as="div" style={styled.ButtonWrapper}>
              {experience.buttonIcon}
              <Text
                as="a"
                href={experience.linkHref}
                css={styled.Button}
                target="_blank"
              >
                {experience.buttonText}
              </Text>
            </Text>
          </Text>
          <Text as="picture" css={styled.ImageContainer}>
            <Image
              src={experience.image}
              alt={experience.imageAlt}
              style={styled.Img}
              placeholder="blur"
              sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
            />
          </Text>
        </>
      ) : (
        <>
          <Text as="picture" css={styled.ImageContainer}>
            <Image
              src={experience.image}
              alt={experience.imageAlt}
              style={styled.Img}
              placeholder="blur"
              sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
            />
          </Text>
          <Text as="article" css={styled.ArticleEven}>
            <Text h4 css={styled.CardTitle}>
              {experience.title}
            </Text>
            <Text>{experience.body}</Text>
            <Text as="div" style={styled.ButtonWrapper}>
              {experience.buttonIcon}
              <Text
                as="a"
                href={experience.linkHref}
                css={styled.Button}
                target="_blank"
              >
                {experience.buttonText}
              </Text>
            </Text>
          </Text>
        </>
      )}
    </Fragment>
  );
};

const Experience = () => {
  const isTabletL = useMediaQuery(responsive.tabletL);
  return (
    <>
      <PageNoPaddingContainer cols="1">
        <Text as="article" css={styled.HeadingWrapper}>
          <Text h2 css={styled.Heading} id="experience">
            {STRING_TYPES.EXPERIENCE_TITLE}
          </Text>
        </Text>
      </PageNoPaddingContainer>
      <ExperienceContainer>
        {experiences.map((experience, idx) =>
          isTabletReverseRow(experience, idx, isTabletL)
        )}
      </ExperienceContainer>
    </>
  );
};

export default Experience;
