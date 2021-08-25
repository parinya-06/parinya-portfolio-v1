import React, { useState } from "react";
import "./ResponsiveBar.scss";
// import Button from "./Button";
import GithubLogo from "../images/social-handle/github.svg";
import LinkedInLogo from "../images/social-handle/linkedin.svg";
import TwitterLogo from "../images/social-handle/twitter.svg";
import InstagramLogo from "../images/social-handle/instagram.svg";
import FacebookLogo from "../images/social-handle/facebook.svg";
import { Link } from "react-scroll";

const ResponsiveBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const changeIcon = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="responsive__nav">
        
        <div className="responsive__nav--hamburger">
          <span onClick={changeIcon}>
            {isOpen ? (
              <svg
                fill="#eeeeff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="30px"
                height="30px"
              >
                <path d="M 14.40625 13 L 13 14.40625 L 23.625 25 L 13 35.59375 L 14.40625 37 L 25.0625 26.40625 L 35.6875 37 L 37.09375 35.59375 L 26.46875 25 L 37.09375 14.40625 L 35.6875 13 L 25.0625 23.59375 Z" />
              </svg>
            ) : (
              <svg
                fill="#eeeeff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30px"
                height="30px"
              >
                {" "}
                <path d="M 4 3 C 3.448 3 3 3.448 3 4 L 3 6 C 3 6.552 3.448 7 4 7 L 6 7 C 6.552 7 7 6.552 7 6 L 7 4 C 7 3.448 6.552 3 6 3 L 4 3 z M 11 3 C 10.448 3 10 3.448 10 4 L 10 6 C 10 6.552 10.448 7 11 7 L 13 7 C 13.552 7 14 6.552 14 6 L 14 4 C 14 3.448 13.552 3 13 3 L 11 3 z M 18 3 C 17.448 3 17 3.448 17 4 L 17 6 C 17 6.552 17.448 7 18 7 L 20 7 C 20.552 7 21 6.552 21 6 L 21 4 C 21 3.448 20.552 3 20 3 L 18 3 z M 4 10 C 3.448 10 3 10.448 3 11 L 3 13 C 3 13.552 3.448 14 4 14 L 6 14 C 6.552 14 7 13.552 7 13 L 7 11 C 7 10.448 6.552 10 6 10 L 4 10 z M 11 10 C 10.448 10 10 10.448 10 11 L 10 13 C 10 13.552 10.448 14 11 14 L 13 14 C 13.552 14 14 13.552 14 13 L 14 11 C 14 10.448 13.552 10 13 10 L 11 10 z M 18 10 C 17.448 10 17 10.448 17 11 L 17 13 C 17 13.552 17.448 14 18 14 L 20 14 C 20.552 14 21 13.552 21 13 L 21 11 C 21 10.448 20.552 10 20 10 L 18 10 z M 4 17 C 3.448 17 3 17.448 3 18 L 3 20 C 3 20.552 3.448 21 4 21 L 6 21 C 6.552 21 7 20.552 7 20 L 7 18 C 7 17.448 6.552 17 6 17 L 4 17 z M 11 17 C 10.448 17 10 17.448 10 18 L 10 20 C 10 20.552 10.448 21 11 21 L 13 21 C 13.552 21 14 20.552 14 20 L 14 18 C 14 17.448 13.552 17 13 17 L 11 17 z M 18 17 C 17.448 17 17 17.448 17 18 L 17 20 C 17 20.552 17.448 21 18 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 18 C 21 17.448 20.552 17 20 17 L 18 17 z" />
              </svg>
            )}
          </span>
        </div>
      </nav>
      <div className={isOpen ? "show__content" : "hide__content"}>
        <ul className="show__content--list1">
          <li>
            <Link to="home" spy={true} smooth={true} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="intro" smooth={true} spy={true} onClick={closeMenu}>
              Intro
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} spy={true} onClick={closeMenu}>
              Projects
            </Link>
          </li>

          {/* <li>
            <Link to="contact" smooth={true} spy={true} onClick={closeMenu}>
              Say Hello
            </Link>
          </li> */}
        </ul>
        <ul className="show__content--list2">
          <li>
            <a href="https://github.com/parinya-06" target="blank">
              <img src={GithubLogo} alt="Github Logo" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/keng.parinya.35/" target="blank">
              <img src={FacebookLogo} alt="Facebook Logo" style={{width:'35px'}} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/kengzkpr7/" target="blank">
              <img src={InstagramLogo} alt="Instagram Logo" />
            </a>
          </li>
        </ul>
        {/* <div className="show__content--btn">
          <Button className="btn-dark">Resume</Button>
        </div> */}
      </div>
    </>
  );
};

export default ResponsiveBar;
