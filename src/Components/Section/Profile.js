import React from "react";
import styled from "styled-components";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 240px;
  height: 100vh;
  background: rgb(230, 230, 230);
  top: 0;
  color: black;
  padding-top: 3rem;

  @media screen and (max-width: 768px) {
    position: unset;
    width: 100%;
    height: auto;
  }
`;

const Info = styled.div``;

const Img = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: green;
`;
const Name = styled.div`
  font-weight: bold;
`;
const Intro = styled.div``;
const Anchor = styled.div``;
const Item = styled.div``;

const Profile = () => {
  return (
    <Block>
      <Info>
        <Img />
        <Name>김병준 | Byeong Jun, Kim</Name>
        <Intro></Intro>
      </Info>
      <Anchor>
        <Item>Skill</Item>
        <Item>Project</Item>
        <Item>Contact</Item>
      </Anchor>
    </Block>
  );
};

export default Profile;
