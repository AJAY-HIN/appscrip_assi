import { styled } from "styled-components";
import { FlexContainer } from "../../../globalstyle.js";

export const Container = styled(FlexContainer)`
  width: 100%;
  height: 119rem;
  flex-shrink: 0;
`;

export const ContainerHeadind = styled.div`
  width: 100%;
  text-align: center;
  margin: 6rem 0 2rem 0;

  & > span {
    color: #d9d9d9;
    font-family: Roboto;
    font-size: 6.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 118%; /* 75.52px */
  }
`;

export const CardContainer = styled.div`
  width: 95%;
`;

export const LgCard = styled.div`
  width: 48%;
  display: flex;
  justify-content: center;
  border-radius: 28px;
  background: linear-gradient(#7526f2, #c826f2);
`;

export const Card = styled(FlexContainer)`
  border-radius: 28px;
  background: linear-gradient(#7526f2, #c826f2);

  ${
    "" /* & > div {
    width: 85%;
  } */
  }
`;

export const CardHeading = styled.span`
  color: var(--white-50, #cac4d2);
  text-align: center;
  font-family: Roboto;
  font-size: 4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 118%; /* 47.2px */
  margin-top: 2rem;
`;

export const Cardtext = styled.span`
  color: var(--content-100, #ba94df);
  text-align: center;
  font-family: Roboto;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
`;

export const ChildImgCard = styled.div`
  border-radius: 14.004px;
  background: #1c1423;
  width: 16.2rem;
  height: 24.8rem;
  flex-shrink: 0;
`;

export const FileImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.girl {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ImgTitle = styled.span`
  color: #fff;
  text-align: justify;
  font-family: Roboto;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.14px;
  margin-right: 1rem;
`;

export const CardSvg = styled.div``;
