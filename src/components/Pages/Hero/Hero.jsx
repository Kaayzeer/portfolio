import { Text } from "@nextui-org/react";
import Image from "next/image";
import TypeIt from "typeit-react";
import HeroPic from "../../../../public/images/heroPic.png";
import { responsive } from "@/styles/styles";
import {
  GreetingStyles,
  HeadingStyles,
  HeroPicStyles,
  ArticleStyles,
  ImageContainerStyles,
} from "./styles";

const DEVELOPER_TYPE = {
  GREETING: "Hello I am",
  NAME: "Nikolas Rosinelli",
  REACT: "React Developer",
  SOFTWARE: "Software Developer",
  WEB: "Web Developer",
};

const Hero = () => {
  return (
    <>
      <Text as="div" css={ArticleStyles}>
        <Text css={GreetingStyles} as="div">
          {DEVELOPER_TYPE.GREETING}
        </Text>
        <Text h1 css={HeadingStyles}>
          {DEVELOPER_TYPE.NAME}
        </Text>
        <Text>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .pause(500)
                .type(DEVELOPER_TYPE.WEB)
                .delete(400)
                .pause(950)
                .type(DEVELOPER_TYPE.SOFTWARE)
                .pause(500)
                .delete(300)
                .pause(850)
                .type(DEVELOPER_TYPE.REACT)
                .pause(500)
                .delete(400)
                .pause(950);
              return instance;
            }}
            options={{
              waitUntilVisible: true,
              loop: true,

              lifeLike: true,
              cursorChar: "_",
              smartBackspace: true,
              speed: 220,
            }}
          />
        </Text>
      </Text>

      <Text as="div" css={ImageContainerStyles}>
        <Image
          src={HeroPic}
          priority
          alt="hero-picture"
          style={HeroPicStyles}
          placeholder="blur"
          sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
        />
      </Text>
    </>
  );
};

export default Hero;
