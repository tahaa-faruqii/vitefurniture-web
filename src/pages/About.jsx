import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="img-container">
          <img src="/sofa.png" alt="" className="about-img" />
        </div>
        <div className="about-text-container">
          <h1>
            We Create your home more <br /> aesthetic
          </h1>
          <h3>
            Furniture power is a software as services for multipurpose business
            management system
          </h3>

          <div className="sofa-container">
            <img src="/check.png" className="img-profile" />
            <h2>Valuation Services</h2>
          </div>
          <h4>
            Sometimes features require a short description. This can be detailed
            description
          </h4>

          <div className="sofa-container">
            <img src="/check.png" className="img-profile" />
            <h2>Development of Furniture Models</h2>
          </div>
          <h4>
            Sometimes features require a short description. This can be detailed
            description
          </h4>
        </div>
      </div>
    </div>
  );
}

export default About;
