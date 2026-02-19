import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Top Section: Logo and Socials */}
      <div className="footer-top">
        <h2 className="footer-logo">FurniShop</h2>
        <div className="social-links">
          <a href="#">
            <img src="/public/instagram.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/public/facebook.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/public/twitter.png" alt="Twitter" />
          </a>
          <a href="#">
            <img src="/public/github.png" alt="Github" />
          </a>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Middle Section: Links Grid */}
      <div className="footer-grid">
        <div className="footer-column">
          <h3>Our Products</h3>
          <ul>
            <li>The Support Suite</li>
            <li>The Sales Suite</li>
            <li>Support</li>
            <li>Guide</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Top Features</h3>
          <ul>
            <li>Ticketing System</li>
            <li>Knowledge Base</li>
            <li>Community Forums</li>
            <li>Help Desk Software</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Product Support</li>
            <li>Request Demo</li>
            <li>Library</li>
            <li>Peoplepower Blog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Press</li>
            <li>Investors</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Favourite Things</h3>
          <ul>
            <li>For Enterprise</li>
            <li>For Startups</li>
            <li>For Benchmark</li>
            <li>For Small Business</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="footer-bottom">
        <p>© NameBrand 2022 - All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
