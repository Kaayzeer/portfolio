import Avatars from "@/components/Common/Avatars/Avatars";
import { TextWrapper } from "./styles";
import { Card, Grid, Text } from "@nextui-org/react";

const skillCards = {
  Technologies: {
    icons: [
      <Avatars type="html" />,
      <Avatars type="css" />,
      <Avatars type="javaScript" />,
      <Avatars type="next" />,
      <Avatars type="typeScript" />,
      <Avatars type="mongo" />,
      <Avatars type="node" />,
      <Avatars type="express" />,
    ],
    texts: [
      "Html5",
      "css3",
      "JavaScript",
      "Next",
      "Typescript",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
  },
  Tools: {
    icons: [
      <Avatars type="figma" />,
      <Avatars type="postman" />,
      <Avatars type="github" />,
      <Avatars type="git" />,
      <Avatars type="linux" />,
      <Avatars type="vercel" />,
      <Avatars type="firebase" />,
    ],
    texts: ["Figma", "Postman", "Github", "Git", "Linux", "Vercel", "Firebase"],
  },
  Libraries: {
    icons: [
      <Avatars type="react" />,
      <Avatars type="redux" />,
      <Avatars type="tailwind" />,
      <Avatars type="sass" />,
      <Avatars type="next" />,
      <Avatars type="styled" />,
      <Avatars type="ant" />,
    ],
    texts: [
      "React",
      "Redux",
      "Tailwind.css",
      "SASS",
      "NextUI",
      "styled-components",
      "andDesign",
    ],
  },
};

const Skills = () => {
  return (
    <>
      <Text h3>Skills</Text>

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
