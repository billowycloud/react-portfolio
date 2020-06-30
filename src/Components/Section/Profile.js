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

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  padding: 10px;
`;

const Img = styled.div`
  width: 200px;
  height: 200px;
  border: 12px solid black;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const Name = styled.div`
  font-weight: 900;
  font-size: 1.5rem;
`;
const Intro = styled.div`
  margin-top: 2rem;
  text-align: center;
  padding: 0 10px;
`;
const Anchor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Item = styled.div``;
const SNS = styled.div`
  display: flex;
`;

const Profile = () => {
  return (
    <Block>
      <Info>
        <Name>웹 개발자 김병준</Name>
        <Img />
        <Name>Byeong Jun, Kim</Name>
        <Intro>자기소개입니다. 자기소개입니다. 자기소개입니다. 자기소개입니다.</Intro>
      </Info>
      <Anchor>
        <Item>Skill</Item>
        <Item>Project</Item>
        <Item>Contact</Item>
      </Anchor>
      <SNS>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SNS>
    </Block>
  );
};

export default Profile;
