import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElement";
const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of The Day</h1>
      <p>Truffle alrendo sauce topped with coconut gold Sugar</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
