import { Text } from "@nextui-org/react";
import Image from "next/image";
import TypeIt from "typeit-react";
import HeroPic from "../../../../public/images/heroPic.png";
import PageContainer from "@/components/Layout/Container";
import { STRING_TYPES } from "@/components/strings";
import SocialMediaIcons from "@/components/Common/SocialMediaIcons/SocialMediaIcons";
import { responsive } from "@/styles/styles";
import * as styled from "./styles";
import useMediaQuery from "@/hooks/useMediaQuery";

const Hero = () => {
  const isMobile = useMediaQuery(responsive.mobileL);
  const renderFromMobileScreen = (code) => {
    return isMobile ? code : null;
  };
  return (
    <PageContainer id="home">
      <Text as="article" css={styled.Article} id="home">
        <Text css={styled.Greeting}>{STRING_TYPES.GREETING}</Text>
        <Text h1 css={styled.Heading}>
          {STRING_TYPES.NAME}
        </Text>
        {renderFromMobileScreen(
          <Text css={styled.TypeIt}>
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
                cursorChar: "_",
                smartBackspace: true,
                speed: 220,
              }}
            />
          </Text>
        )}
        <SocialMediaIcons />
      </Text>

      {renderFromMobileScreen(
        <Text as="picture" css={styled.ImageContainer}>
          <Image
            src={HeroPic}
            priority
            alt="hero-image"
            style={styled.HeroPic}
            placeholder="blur"
            sizes={`(min-width: ${responsive.laptop}) 40vw, 100vw`}
          />
        </Text>
      )}
    </PageContainer>
  );
};

export default Hero;
