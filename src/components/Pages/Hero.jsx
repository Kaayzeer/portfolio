import { Col, Text, Row } from "@nextui-org/react";
import TypeIt from "typeit-react";

const DEVELOPER_TYPE = {
  GREETING: "Hello I am",
  NAME: "Nikolas Rosinelli",
  PRODUCT: "Product Developer",
  WEB: "Web Developer",
  SOFTWARE: "Software Developer",
};

const ColStyles = {
  width: "100%",
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
  fontWeight: 700,
  fontSize: "2.5rem",
  "@md": {
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
  "@md": {
    flexDirection: "row",
    gap: "2rem",
  },
};

const Hero = () => {
  return (
    <Row css={WrapperStyles}>
      <Col css={ColStyles}>
        <Text css={GreetingStyles} as="div" blockquote>
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
                .type(DEVELOPER_TYPE.PRODUCT)
                .delete(400)
                .pause(950)
                .type(DEVELOPER_TYPE.SOFTWARE)
                .pause(500)
                .delete(300)
                .pause(850)
                .type(DEVELOPER_TYPE.WEB)
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
      <Col css={ColStyles}>Other</Col>
    </Row>
  );
};

export default Hero;
