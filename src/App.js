import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDessert } from "./components/Products/data";
function App() {
  return (
    <Router>
      <Hero />
      <Products heading="Choose your Favorite" data={productData} />
      <Feature />
      <Products heading="Choose your  Dessert" data={productDessert} />
      <Footer />
    </Router>
  );
}

export default App;
