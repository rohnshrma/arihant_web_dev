// Import the React library to use JSX and React features
// Import the Footer component from the sections directory
// Import the Cta (Call to Action) component from the sections directory
// Import the App-specific CSS styles
// Import the Features component from the sections directory
// Import the Pricing component from the sections directory
// Import the Title component from the sections directory
// Import the Testimonials component from the sections directory
// Import the Brand component from the sections directory
import React from "react";
import Footer from "./sections/Footer";
import Cta from "./sections/Cta";
import "./App.css";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Title from "./sections/Title";
import Testimonials from "./sections/Testimonials";
import Brand from "./sections/Brands";
function App() {
  return (
    <>
      {/* Title  */}
      <Title />
      {/* Features */}
      <Features />
      {/* Testimonials */}
      <Testimonials />
      {/* Brands */}
      <Brand />
      {/* Pricing */}
      <Pricing />
      {/* CTA Section */}
      <Cta />
      {/* footer Section */}
      <Footer />
    </>
  );
}

export default App;
