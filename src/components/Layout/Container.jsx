import React from "react";
import { Container } from "@nextui-org/react";
import {
  ContainerFullWidthStyles,
  ContainerMaxWidthStyles,
  ContainerNoPaddingMaxWidthStyles,
  ExperienceContainerMaxWidthStyles,
} from "../styles";

export const PageNoPaddingContainer = ({ children, cols, id }) => {
  return (
    <Container id={id} fluid css={ContainerFullWidthStyles}>
      <Container md css={ContainerNoPaddingMaxWidthStyles(cols)}>
        {children}
      </Container>
    </Container>
  );
};

export const ExperienceContainer = ({ children, id }) => {
  return (
    <Container id={id} fluid css={ContainerFullWidthStyles}>
      <Container md css={ExperienceContainerMaxWidthStyles}>
        {children}
      </Container>
    </Container>
  );
};

const PageContainer = ({ children, cols, id }) => {
  return (
    <Container id={id} fluid css={ContainerFullWidthStyles}>
      <Container md css={ContainerMaxWidthStyles(cols)}>
        {children}
      </Container>
    </Container>
  );
};

export default PageContainer;
