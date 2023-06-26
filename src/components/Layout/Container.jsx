import React from "react";
import { Container } from "@nextui-org/react";
import * as styled from "./styles.js";

export const PageNoPaddingContainer = ({ children, cols, id }) => {
  return (
    <Container id={id} fluid css={styled.ContainerFullWidth}>
      <Container md css={styled.ContainerNoPaddingMaxWidth(cols)}>
        {children}
      </Container>
    </Container>
  );
};

export const FooterContainer = ({ children, id, cols, bgColor }) => {
  return (
    <Container id={id} fluid css={styled.FooterFullWidth(bgColor)}>
      <Container md css={styled.ContainerMaxWidth(cols)}>
        {children}
      </Container>
    </Container>
  );
};

export const ExperienceContainer = ({ children, id }) => {
  return (
    <Container id={id} fluid css={styled.ContainerFullWidth}>
      <Container md css={styled.ExperienceContainerMaxWidth}>
        {children}
      </Container>
    </Container>
  );
};

const PageContainer = ({ children, cols, id }) => {
  return (
    <Container id={id} fluid css={styled.ContainerFullWidth}>
      <Container md css={styled.ContainerMaxWidth(cols)}>
        {children}
      </Container>
    </Container>
  );
};

export default PageContainer;
