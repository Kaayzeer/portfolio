import { Card, Grid, Text } from "@nextui-org/react";

const skillCards = {
  React: { icon: "React", text: "React" },
  Next: { icon: "Next", text: "Next" },
  Typescript: { icon: "Typescript", text: "Typescript" },
};

const skills = [
  { icon: "React", text: "React" },
  { icon: "Next", text: "Next" },
  { icon: "Typescript", text: "Typescript" },
  { icon: "Javascript", text: "Javascript" },
  { icon: "CSS33", text: "CSS3" },
  { icon: "React", text: "HTML5" },
  { icon: "Firebase", text: "HTML5" },
  { icon: "React", text: "HTML5" },
];

console.log(
  "Object.entries(skillCards)",
  Object.entries(skillCards).map((skillCard) => {
    return skillCard[0], skillCard[1];
  })
);

const Skills = () => {
  return (
    <>
      <Text h3>Skills</Text>
      <Grid.Container gap={2}>
        {Object.entries(skillCards).map((card) => (
          <Grid xs={4}>
            <Card isHoverable>
              <Card.Body>
                <Text>{card[0]}</Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default Skills;
