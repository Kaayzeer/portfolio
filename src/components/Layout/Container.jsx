import React from 'react';
import { Container } from '@nextui-org/react';
import {
  ContainerFullWidthStyles,
  ContainerMaxWidthStyles,
  ContainerNoPaddingMaxWidthStyles,
} from '../styles';

export const PageNoPaddingContainer = ({ children, cols }) => {
  return (
    <Container fluid css={ContainerFullWidthStyles}>
      <Container md css={ContainerNoPaddingMaxWidthStyles(cols)}>
        {children}
      </Container>
    </Container>
  );
};

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
