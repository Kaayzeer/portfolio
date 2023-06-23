import React, { Fragment } from "react";
import Image from "next/image";
import { Text, Button } from "@nextui-org/react";
import { experiences } from "./experiences";
import { responsive } from "@/styles/styles";
import * as styled from "./styles";
import useMediaQuery from "@/hooks/useMediaQuery";
import PageContainer, {
  PageNoPaddingContainer,
} from "@/components/Layout/Container";
import { STRING_TYPES } from "@/components/strings";

const isTabletReverseRow = (experience, index, isTablet) => {
  return (
    <Fragment key={experience.title}>
      {isTablet && index % 2 !== 0 ? (
        <>
          <Text as="article" css={styled.ArticleOdd}>
            <Text h4 css={styled.CardTitle}>
              {experience.title}
            </Text>
            <Text>{experience.body}</Text>
            <Button
              as="a"
              bordered
              target="_blank"
              css={styled.Button}
              borderWeight="extrabold"
              href={experience.linkHref}
            >
              {experience.buttonText}
            </Button>
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
            <Button
              as="a"
              target="_blank"
              bordered
              borderWeight="extrabold"
              css={styled.Button}
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
      <PageNoPaddingContainer cols="1">
        <Text as="article" css={styled.HeadingWrapper}>
          <Text h2 css={styled.Heading}>
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
