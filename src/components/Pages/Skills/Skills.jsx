import { Card, Grid, Text } from '@nextui-org/react';
import { skillCards } from './skillCards';
import PageContainer from '@/components/Layout/Container';
import { STRING_TYPES } from '@/components/strings';
import * as styled from './styles';

const Skills = () => {
  return (
    <PageContainer cols='1'>
      <Text css={styled.Heading} h2>
        {STRING_TYPES.SKILLS_TITLE}
      </Text>

      <Grid.Container gap={2}>
        {Object.entries(skillCards).map((key) => {
          return (
            <Grid xs={12} sm={4} key={key[0]}>
              <Card isHoverable>
                <Card.Body>
                  <Text h3 css={styled.CardHeading}>
                    {key[0]}
                  </Text>
                  {key[1].icons.map((icon, idx) => {
                    const text = key[1].texts[idx];
                    return (
                      <Text as='article' css={styled.TextWrapper} key={text}>
                        <>
                          {icon}
                          <Text css={styled.CardBody}>{text}</Text>
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
    </PageContainer>
  );
};

export default Skills;
