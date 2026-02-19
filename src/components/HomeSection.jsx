import React from "react";

export default function HomeSection() {
  return (
    <section id="homeSection">
      <div className="hero-content">
        <h1 id="top-text">Creative Home Simplify Your Furniture</h1>
        <p id="top-desc">
          Do I have consent to record this meeting gain location,
          root-and-branch, review, nor game plan who’s the goto.
        </p>
        <button id="shop-now">Shop Now</button>
      </div>

      <div id="data-container">
        <div className="stat-item">
          <h2 className="count">7</h2>
          <p className="text">Year Experience</p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <h2 className="count">2</h2>
          <p className="text">Opened in country</p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <h2 className="count">10k+</h2>
          <p className="text">Furniture sold</p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <h2 className="count">260+</h2>
          <p className="text">Variant Furniture</p>
        </div>
      </div>
    </section>
  );
}
