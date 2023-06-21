import {
  TextWrapper,
  HeadingStyles,
  CardHeadingStyles,
  CardBodyStyles,
} from './styles';
import { Card, Grid, Text } from '@nextui-org/react';
import { skillCards } from './skillCards';
import PageContainer from '@/components/Layout/Container';

const Skills = () => {
  return (
    <PageContainer cols='1'>
      <Text css={HeadingStyles} h3>
        Skills
      </Text>

      <Grid.Container gap={2}>
        {Object.entries(skillCards).map((key) => {
          return (
            <Grid xs={12} sm={4} key={key[0]}>
              <Card isHoverable>
                <Card.Body>
                  <Text h4 css={CardHeadingStyles}>
                    {key[0]}
                  </Text>
                  {key[1].icons.map((icon, idx) => {
                    const text = key[1].texts[idx];
                    return (
                      <Text as='div' css={TextWrapper} key={text}>
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
    </PageContainer>
  );
};

export default Skills;
