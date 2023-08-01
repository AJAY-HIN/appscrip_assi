/* eslint-disable max-len */

import styled, { createGlobalStyle, css } from "styled-components";
import { device, minDevice, maxSizeDevice } from "../constants/device.js";

export const GlobalStyles = createGlobalStyle`

  html {
    height: 100%;
  }
  body {
   background: #121212;
   color:white;
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'Circular Std Book', sans-serif;
   

    // 1921px - 1441px
    @media ${device.laptopXL} and ${minDevice.laptopL} { 
      font-size: 50%;
    }

    // 2560px - 1920px
    @media ${device.desktop} and ${minDevice.laptopXL} {
      font-size: 62.5%;
    }
 
    // 1440px - 768px
    @media ${device.laptopL} and ${minDevice.tablet} {
      font-size: 47.5%;
    }

    @media ${device.tablet} and ${minDevice.mobileL} {
      font-size: 37.5%;
    }

    @media ${device.mobileL} and ${minDevice.mobileM} {
      font-size: 37.5%;
    }

    @media ${device.mobileM} and ${minDevice.mobileS} {
      font-size: 35%;
    }

    }

  h2{
    font-size: 2.2rem;
  }
     
  .non-selectable{
    user-select: none;
  }
    
  a {
    text-decoration: none;
    }

  .text-overflow{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }



  .cursor{
    pointer:cursor;
  }
  


  a[href], input[type="submit"], button, select, label[for], .pointer{
    cursor: pointer;
  }

  .disable{
    pointer-events: none;
    opacity: 0.4
  }
  .required:after {
    content:" *";
  }

  .not-allowed {cursor: not-allowed;}
   
  .hide{
    display: none
  }

  .capitalize{
    text-transform: capitalize;
  }

  `;
