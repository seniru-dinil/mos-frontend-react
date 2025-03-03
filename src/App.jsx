import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";

const App = () => {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
};

export default App;
