import Avatars from "@/components/Common/Avatars/Avatars";
import { TextWrapper } from "./styles";
import { Card, Grid, Text } from "@nextui-org/react";

const skillCards = {
  Technologies: {
    icons: [
      <Avatars type="react" />,
      <Avatars type="javaScript" />,
      <Avatars type="next" />,
      <Avatars type="typeScript" />,
      <Avatars type="mongo" />,
      <Avatars type="node" />,
      <Avatars type="firebase" />,
    ],
    texts: [
      "React",
      "JavaScript",
      "Next",
      "Typescript",
      "MongoDB",
      "NodeJs",
      "FirebaseIcon",
    ],
  },
  Tools: {
    icons: ["figmaIcon", "postmanIcon", "githubIcon", "gitIcon", "linuxIcon"],
    texts: ["figma", "Postman", "Github", "Git", "Linux"],
  },
  Libraries: {
    icons: [
      "ReduxIcon",
      "Tailwind.css",
      "SASS",
      "NextUI",
      "styled-components",
      "express.js",
      "andDesign",
    ],
    texts: [
      "Redux",
      "Tailwind.css",
      "SASS",
      "NextUI",
      "styled-components",
      "express.js",
      "andDesign",
    ],
  },
};

const Skills = () => {
  return (
    <>
      <Text h3>Tools and Technologies</Text>

      <Grid.Container gap={2}>
        {Object.entries(skillCards).map((key) => {
          return (
            <Grid xs={12} sm={4}>
              <Card isHoverable>
                <Card.Body>
                  <Text css={{ textAlign: "center" }}>{key[0]}</Text>
                  {key[1].icons.map((icon, idx) => {
                    const text = key[1].texts[idx];
                    return (
                      <Text as="div" css={TextWrapper}>
                        <Text>{icon}</Text>
                        <Text>{text}</Text>
                      </Text>
                    );
                  })}
                </Card.Body>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
    </>
  );
};

export default Skills;
