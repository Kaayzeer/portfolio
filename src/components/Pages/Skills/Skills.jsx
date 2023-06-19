import {
  TextWrapper,
  InnerWrapper,
  HeadingStyles,
  CardHeadingStyles,
  CardBodyStyles,
} from "./styles";
import { Card, Grid, Text } from "@nextui-org/react";
import { skillCards } from "./skillCards";

const Skills = () => {
  return (
    <>
      <Text css={HeadingStyles} h3>
        Skills
      </Text>

      <Grid.Container gap={2}>
        {Object.entries(skillCards).map((key) => {
          return (
            <Grid xs={12} sm={4}>
              <Card isHoverable>
                <Card.Body>
                  <Text h4 css={CardHeadingStyles}>
                    {key[0]}
                  </Text>
                  {key[1].icons.map((icon, idx) => {
                    const text = key[1].texts[idx];
                    return (
                      <Text as="div" css={TextWrapper}>
                        <>
                          {icon}
                          <Text css={CardBodyStyles}>{text}</Text>
                        </>
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
