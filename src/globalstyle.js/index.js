import styled, { css } from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  &.col {
    flex-direction: column;
  }

  &.jc_center {
    justify-content: center;
  }

  &.jc_spacebetween {
    justify-content: space-between;
  }

  &.jc_spacearound {
    justify-content: space-around;
  }

  &.ai_center {
    align-items: center;
  }

  &.ai_flexstart {
    align-items: flex-start;
  }

  &.flex_wrap {
    flex-wrap: wrap;
  }
  &.icon {
    padding: 1rem;
    margin-right: 10px;
  }
  &.relative {
    position: relative;
  }
`;
