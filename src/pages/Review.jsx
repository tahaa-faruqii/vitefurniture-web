import React from "react";

function Review() {
  return (
    <div id="review-container" className="review-section">
      <div className="review-content">
        <h1 className="review-title">What People Are Saying About Us</h1>

        <div className="client-info">
          <img
            src="/sofa.png"
            alt="Josh Smith"
            className="client-avatar"
          />
          <div>
            <h2 className="client-name">Josh Smith</h2>
            <p className="client-desc">Manager of The New York Times</p>
          </div>
        </div>

        <p className="review-text">
          “They are have a perfect touch for make something so professional
          interest and useful for a lot of people .”
        </p>

        {/* Navigation Arrows from the image */}
        <div className="review-nav">
          <button className="nav-btn prev">←</button>
          <button className="nav-btn next">→</button>
        </div>
      </div>

      <div className="review-image-wrapper">
        <img
          src="/drawing-room.png"
          alt="Interior"
          className="main-review-img"
        />
      </div>
    </div>
  );
}

export default Review;
