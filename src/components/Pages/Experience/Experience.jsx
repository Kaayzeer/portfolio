import React from "react";
import { Text } from "@nextui-org/react";

import HeroPic from "../../../../public/images/heroPic.png";
import Image from "next/image";
import {
  HeadingStyles,
  ImageContainerStyles,
  HeroPicStyles,
  ArticleStyles,
} from "./styles";
import { responsive } from "@/styles/styles";

const experiences = [
  {
    image: HeroPic,
    name: "alo",
  },
  {
    image: HeroPic,
    name: "alo",
  },
  {
    image: HeroPic,
    name: "alo",
  },
  {
    image: HeroPic,
    name: "alo",
  },
];

const reverseRow = (experience, index) => {
  return (
    <>
      {index % 2 === 0 ? (
        <>
          <Text as="div" css={ImageContainerStyles}>
            <Image
              src={experience.image}
              priority
              alt="hero-picture"
              style={HeroPicStyles}
              placeholder="blur"
              sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
            />
          </Text>
          <Text as="div" css={ArticleStyles}>
            <Text as="div">{experience.name}</Text>
            <Text h1 css={HeadingStyles}>
              {experience.name}
            </Text>
          </Text>
        </>
      ) : (
        <>
          <Text as="div" css={ArticleStyles}>
            <Text as="div">{experience.name}</Text>
            <Text h1 css={HeadingStyles}>
              {experience.name}
            </Text>
          </Text>
          <Text as="div" css={ImageContainerStyles}>
            <Image
              src={experience.image}
              priority
              alt="hero-picture"
              style={HeroPicStyles}
              placeholder="blur"
              sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
            />
          </Text>
        </>
      )}
    </>
  );
};

const Experience = () => {
  return (
    <>{experiences.map((experience, idx) => reverseRow(experience, idx))}</>
  );
};

export default Experience;
