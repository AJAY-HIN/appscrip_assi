import { styled } from "styled-components";

export const Button = styled.span`
  display: flex;
  width: ${(props) => (props?.wd ? props.wd : "auto")};
  height: ${(props) => (props?.ht ? props.ht : "auto")};
  padding: 1.2rem 4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 16px;
  background: var(--aa, linear-gradient(135deg, #7526f2 0%, #c826f2 100%));
`;

export const BtnLabel = styled.span`
  color: #fff;
  font-family: Roboto;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Text = styled.span`
  color: #fff;
  font-family: Roboto;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
