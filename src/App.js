import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
// import GetInTouch from "./components/GetInTouch";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Preloader from "./components/Preloader";
// import Projects from "./components/Projects";
import Projectss from "./components/Projectss";

// Importing the Components

const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      {loaded ? (
        <div>
          <Home />
          <Intro />
          <Projectss />
          <Footer />
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default App;
