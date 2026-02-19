import React from "react";

function ShopNow() {
  return (
    <section className="shop-now-container">
      <div className="shop-now-banner">
        <div className="left-content">
          <img src="/remover-lamp.png" alt="Lamp" className="floating-lamp" />
        </div>

        <div className="right-content">
          <h2 className="banner-title">
            Get more discount <br />
            Off your order
          </h2>
          <p className="banner-subtitle">Join our mailing list</p>

          <div className="input-section">
            <input
              type="email"
              placeholder="Your email address"
              className="email-input"
            />
            <button className="shop-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopNow;
