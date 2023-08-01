import React from "react";
import { Container } from "../Sec2/MiddleSec.style";
import { Image } from "./midLayout.style";
import womanImg from "../../../assets/Bikini.webp";
import { FlexContainer } from "../../../globalstyle.js";

const MidLayout = () => {
  return (
    <FlexContainer style={{ width: "100%", position: "relative" }}>
      <Image src={womanImg} alt="img" />
    </FlexContainer>
  );
};

export default MidLayout;
