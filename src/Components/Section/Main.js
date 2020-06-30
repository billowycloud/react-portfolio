import React from "react";
import styled from "styled-components";
import mainBackground from "../../assets/mainBackground.png";

const Block = styled.div`
  background: linear-gradient(
      to top,
      rgba(20, 20, 20, 1) 10%,
      rgba(20, 20, 20, 0.75) 25%,
      rgba(20, 20, 20, 0.5) 50%,
      rgba(20, 20, 20, 0.3) 75%,
      rgba(20, 20, 20, 0.2) 100%
    ),
    url(${mainBackground});
  background-position: center center;
  background-size: cover;
  height: 100vh;
`;

const Main = () => {
  return <Block>{/* <Img src={mainBackground} /> */}</Block>;
};

export default Main;
