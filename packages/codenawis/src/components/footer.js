import React from "react";
import { connect, styled } from "frontity";
import Container from './utitlity/Container';
import Hr from './utitlity/Hr';
import Logo from './utitlity/Logo';

const Footer = ({ state }) => {
  return (
    <>
      <Container>
          <Logo color="black" />
        <Hr color="black" />
        <FlexBetween>
          <Muted>{state.frontity.description}</Muted>
          <a href="https://github.com/mymakarim" target="_blank" rel="noopener noreferrer">with Love by @mymakarim @codenawis</a>
        </FlexBetween>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Muted = styled.p`
  color: #bbb;
`;

const FlexBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
