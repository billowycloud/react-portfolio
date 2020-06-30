import React from "react";
import Main from "./Section/Main";
import Profile from "./Section/Profile";
import Skill from "./Section/Skill";
import Project from "./Section/Project";
import Contact from "./Section/Contact";
import styled from "styled-components";

const Section = () => {
  return (
    <>
      <Main />
      <Profile />
      <Skill />
      <Project />
      <Contact />
    </>
  );
};

export default Section;
