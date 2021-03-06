import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElement";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza ever</HeroH1>
          <HeroP>Ready for 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
