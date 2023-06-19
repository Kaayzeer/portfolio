import React from "react";
import { Container } from "@nextui-org/react";
import { ContainerFullWidthStyles, ContainerMaxWidthStyles } from "../styles";

const PageContainer = ({ children, cols }) => {
  return (
    <Container fluid css={ContainerFullWidthStyles}>
      <Container md css={ContainerMaxWidthStyles(cols)}>
        {children}
      </Container>
    </Container>
  );
};

export default PageContainer;
