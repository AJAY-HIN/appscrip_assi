import { styled } from "styled-components";
import { Button } from "../Common.style";
import { FlexContainer } from "../../globalstyle.js";
import { device, minDevice } from "../../constants/device";

export const Container = styled.div`
  ${"" /* display: flex; */}
  position :relative;
  width: 100%;
  height: ${(props) => (props?.ht ? props.ht : "auto")};
  ${"" /* justify-content: center; */}
  ${"" /* align-items: center; */}
  ${"" /* flex-shrink: 0; */}
  ${"" /* background: red; */}
  ${"" /* background: linear-gradient(#7526f2, #c826f2); */};
`;

export const SvgDiv = styled.span`
  position: absolute;
  width: 100%;

  &.topLeft {
    top: 0;
    left: 0;
  }

  &.bottomRight {
    bottom: 0;
    right: 0;
  }
`;

export const MainDiv = styled.div`
  display: flex;
`;

export const TextDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media ${minDevice.tablet} and ${device.mobileS} {
    gap: none;
    width: 100%;
  }
`;

export const Heading = styled.p`
  color: var(--white-50, #cac4d2);
  font-family: Roboto;
  font-size: 10rem;
  font-style: normal;
  font-weight: 600;
  line-height: 118%; /* 118px */
`;

export const P = styled.span`
  color: #c2a9d9;
  font-family: Roboto;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Form = styled.div`
  border-radius: 31.442px;
  background: rgba(30, 28, 34, 0.6);
  backdrop-filter: blur(5px);
  width: 52rem;
  height: 70rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const GoogleBtn = styled.div`
  border-radius: 15.721px;
  display: inline-flex;
  padding: 1.5rem 9.9rem 1.5rem 9.9rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;

  & > p {
    color: #fff;
    font-family: Roboto;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1px;
  }
`;

export const FormInnerDiv = styled.div`
  width: 80%;
  padding-top: 10%;
`;

export const Input = styled.input`
  display: flex;
  height: 6.3rem;
  padding: 1rem;
  ${"" /* padding: 2rem 10.4rem 2.2rem 1.8rem; */}
  align-items: center;
  border-radius: 11.3px;
  border: 1.13px solid #3d3549;
  background: transparent;
  font-size: 1.4rem;
  color: white;
`;

export const LgInput = styled(Input)`
  width: 100%;
  margin: 2rem 0 2rem 0;
`;

export const CommonBox = styled(FlexContainer)`
  position: absolute;
  z-zindex: 2;
  width: 100%;
  height: 100%;

  @media ${device.tablet} and ${minDevice.mobileS} {
    flex-direction: column;
  }
`;

export const Span = styled.span`
  color: #8971a0;
  text-align: justify;
  font-family: Roboto;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FormContent = styled.div`
  line-height: 3rem;
`;

export const Hr = styled.hr`
  margin: 1rem 0 1rem 0;
`;
