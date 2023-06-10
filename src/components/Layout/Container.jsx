import React from "react";
import { Container } from "@nextui-org/react";
import { ContainerFullWidthStyles, ContainerMaxWidthStyles } from "./styles";

const PageContainer = ({ children }) => {
  return (
    <Container fluid css={ContainerFullWidthStyles}>
      <Container xl css={ContainerMaxWidthStyles}>
        {children}
      </Container>
    </Container>
  );
};

export default PageContainer;
