import React, { useState, useEffect } from "react";
import "./Home.scss";
import "./Button";
import Navbar from "./Navbar";
import ResponsiveBar from "./ResponsiveBar";
import keng from "../images/personal/keng.jpg";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const navbarChanger = () => {
      if (window.innerWidth <= 910) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    navbarChanger();
    window.addEventListener("resize", navbarChanger);
  }, []);
  return (
    <>
      <div className="home">
        <section className="home__section" id="home">
          <div className="container-1200">
            {isMobile ? <ResponsiveBar /> : <Navbar />}
          </div>
          {/* Main Section */}
          <div className="home__section--main">
            <div className="container-1200">
              <h1 className="home__section--main-title">Parinya Reuangsaen.</h1>
              <p className="home__section--main-para">
                Mobile App / IT Support / Web Developer / UX/UI
              </p>
              <div className="home__section--main-img">
                <img src={keng} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
