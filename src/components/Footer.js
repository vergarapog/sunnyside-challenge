import React from "react";

const Footer = () => {
  return (
    <section className="footer-bg">
      <div className="footer">
        <div className="footer-title">sunnyside</div>
        <div className="footer-flex-link-site">
          <div className="link-site">About</div>
          <div className="link-site">Services</div>
          <div className="link-site">Projects</div>
        </div>
        <div className="footer-link-socials">
          <div className="socials-link">
            <img src="images/icon-facebook.svg" alt="" />
          </div>
          <div className="socials-link">
            <img src="images/icon-instagram.svg" alt="" />
          </div>
          <div className="socials-link">
            <img src="images/icon-twitter.svg" alt="" />
          </div>
          <div className="socials-link">
            <img src="images/icon-pinterest.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
