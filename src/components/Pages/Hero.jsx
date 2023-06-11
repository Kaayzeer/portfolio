import { Col, Text, Row, Container } from "@nextui-org/react";
import Image from "next/image";
import TypeIt from "typeit-react";
import HeroPic from "../../../public/images/heroPic.png";
import { dimensions } from "@/styles/styles";

const DEVELOPER_TYPE = {
  GREETING: "Hello I am",
  NAME: "Nikolas Rosinelli",
  REACT: "React Developer",
  SOFTWARE: "Software Developer",
  WEB: "Web Developer",
};

const ColStyles = {
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
  /*  "@xs": {
    placeItems: "end",
  }, */

  margin: "auto",
};
const GreetingStyles = {
  width: "fit-content",
  padding: ".25rem .5rem",
  borderRadius: ".5rem .5rem .5rem 0rem",
  background: "pink",
  fontSize: "1rem",
  "@md": {
    fontSize: "1rem",
  },
  "@lg": {
    fontSize: "1.5rem",
  },
  "@xl": {
    fontSize: "2rem",
  },
};
const HeadingStyles = {
  letterSpacing: "1px",
  fontWeight: 700,
  fontSize: "2.2rem",
  "@sm": {
    fontSize: "3.5rem",
  },
  "@lg": {
    fontSize: "4.5rem",
  },
  "@xl": {
    fontSize: "5.5rem",
  },
};

const WrapperStyles = {
  gap: "1rem",
  flexDirection: "column",
  "@xs": {
    flexDirection: "row",
    gap: "2rem",
  },
};

const HeroPicStyles = {
  width: "100%",
  height: "auto",
  clipPath:
    "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
};

const Hero = () => {
  return (
    <Row css={WrapperStyles}>
      <Col css={ColStyles}>
        <Col
          css={{
            width: "100%",
          }}
        >
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
        </Col>
      </Col>
      <Col css={ColStyles}>
        <Row
          css={{
            width: "100%",
            "@xs": {
              width: "60%",
            },
          }}
        >
          <Image
            src={HeroPic}
            priority
            alt="hero-picture"
            style={HeroPicStyles}
            placeholder="blur"
            sizes={`(min-width: ${dimensions.mobile}) 40vw, 100vw`}
          />
        </Row>
      </Col>
    </Row>
  );
};

export default Hero;
