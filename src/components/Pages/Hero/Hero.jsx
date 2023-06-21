import { Text } from '@nextui-org/react';
import Image from 'next/image';
import TypeIt from 'typeit-react';
import HeroPic from '../../../../public/images/heroPic.png';
import { responsive } from '@/styles/styles';
import {
  GreetingStyles,
  HeadingStyles,
  TypeItStyles,
  HeroPicStyles,
  ArticleStyles,
  ImageContainerStyles,
} from './styles';
import PageContainer from '@/components/Layout/Container';
import useMediaQuery from '@/hooks/useMediaQuery';
import { STRING_TYPES } from '@/components/strings';

const Hero = () => {
  const isTablet = useMediaQuery(responsive.tablet);
  const renderFromTabletScreen = (code) => {
    return isTablet ? code : null;
  };
  return (
    <PageContainer>
      <Text as='div' css={ArticleStyles}>
        <Text css={GreetingStyles}>{STRING_TYPES.GREETING}</Text>
        <Text h1 css={HeadingStyles}>
          {STRING_TYPES.NAME}
        </Text>
        <Text css={TypeItStyles}>
          {renderFromTabletScreen(
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .pause(500)
                  .type(STRING_TYPES.WEB)
                  .delete(400)
                  .pause(950)
                  .type(STRING_TYPES.SOFTWARE)
                  .pause(500)
                  .delete(300)
                  .pause(850)
                  .type(STRING_TYPES.REACT)
                  .pause(500)
                  .delete(400)
                  .pause(950);

                return instance;
              }}
              options={{
                waitUntilVisible: true,
                loop: true,

                lifeLike: true,
                cursorChar: '_',
                smartBackspace: true,
                speed: 220,
              }}
            />
          )}
        </Text>
      </Text>

      <Text as='div' css={ImageContainerStyles}>
        <Image
          src={HeroPic}
          priority
          alt='hero-image'
          style={HeroPicStyles}
          placeholder='blur'
          sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
        />
      </Text>
    </PageContainer>
  );
};

export default Hero;
