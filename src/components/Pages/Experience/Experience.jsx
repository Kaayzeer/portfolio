import React from "react";
import { Text } from "@nextui-org/react";
import BrickApp from "../../../../public/images/brick-app.png";
import BrickWeb from "../../../../public/images/brick-website.png";
import BrickDashBoard from "../../../../public/images/brick-dashboard.png";
import NextVenture from "../../../../public/images/next-venture.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { responsive } from "@/styles/styles";

import Image from "next/image";
import {
  HeadingStyles,
  ImageContainerStyles,
  ImageStyles,
  ArticleStylesEven,
  ArticleStylesOdd,
} from "./styles";

const experiences = [
  {
    image: BrickWeb,
    title: "Brick Website",
    body: "Bricks website development involves creating a responsive UI/UX with integrated and still un integrated reusable components with scalable solutions and server-side-rendering. Developed with Next, styled components and next-i18",
  },
  {
    image: BrickDashBoard,
    title: "Brick Admin Dashboard",
    body: "Focus on visual redesign, reusable components and a user friendly platform, integrating APIs and custom graphs to the UI. Developed with React, Redux and styled components",
  },
  {
    image: BrickApp,
    title: "Brick App´less Solution",
    body: "Web application, functions as an alternative for customers without the app, Focus on user-flow with easy navigation, database integration and an intuitive interface. Created with React, Redux and SASS",
  },
  {
    image: NextVenture,
    title: "Next Venture",
    body: "The development of Next Venture's domain auction site includes responsive design, UI/UX, and database integration. The tech stack consisted of Next, Firebase, Tailwind.css, Stripe",
  },
];

const reverseRow = (experience, index) => {
  return (
    <>
      {index % 2 !== 0 ? (
        <>
          <Text key={experience.title} as="div" css={ImageContainerStyles}>
            <Image
              src={experience.image}
              priority
              alt="hero-picture"
              style={ImageStyles}
              placeholder="blur"
              sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
            />
          </Text>
          <Text as="div" css={ArticleStylesOdd}>
            <Text h3 css={HeadingStyles}>
              {experience.title}
            </Text>
            <Text>{experience.body}</Text>
          </Text>
        </>
      ) : (
        <>
          <Text as="div" css={ArticleStylesEven}>
            <Text h3 css={HeadingStyles}>
              {experience.title}
            </Text>
            <Text>{experience.body}</Text>
          </Text>
          <Text as="div" css={ImageContainerStyles}>
            <Image
              src={experience.image}
              priority
              alt="hero-picture"
              style={ImageStyles}
              placeholder="blur"
              sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
            />
          </Text>
        </>
      )}
    </>
  );
};

const singleRow = (experience) => {
  return (
    <>
      <Text key={experience.title} as="div" css={ImageContainerStyles}>
        <Image
          src={experience.image}
          priority
          alt="hero-picture"
          style={ImageStyles}
          placeholder="blur"
          sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
        />
      </Text>
      <Text as="div" css={ArticleStylesOdd}>
        <Text h3 css={HeadingStyles}>
          {experience.title}
        </Text>
        <Text>{experience.body}</Text>
      </Text>
    </>
  );
};

const Experience = () => {
  const isTablet = useMediaQuery(responsive.tablet);
  return (
    <>
      {experiences.map((experience, idx) =>
        isTablet ? reverseRow(experience, idx, isTablet) : singleRow(experience)
      )}
    </>
  );
};

export default Experience;
