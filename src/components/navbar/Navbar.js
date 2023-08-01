import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BtnLabel, Button, Text } from "../Common.style";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>LOGO</h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">about us</a>{" "}
            </li>
            <li>
              <a href="#">Our Blog</a>{" "}
            </li>
            <li>
              <a href="#">Support</a>{" "}
            </li>
            <li>
              <a href="#">Affiliate</a>{" "}
            </li>
            <li>
              <a href="#">Program</a>{" "}
            </li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="authBtn">
          <ul className="authBtn-desktop">
            <li>
              <a href="#">
                <Text>Login</Text>
              </a>
            </li>
            <li>
              <Button wd="16.1rem" ht="5.8rem">
                <BtnLabel>Sign Up</BtnLabel>
              </Button>
            </li>
            <li></li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu style={{ color: "#fff", fontSize: "20px" }} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
