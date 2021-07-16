import React from "react";

const Main = () => {
  return (
    <section className="container">
      <article className="section-content reversed">
        <img
          src="images/mobile/image-transform.jpg"
          alt=""
          className="content-img egg"
        />

        <div className="content-text">
          <h3 className="content-text-title">Transform your brand</h3>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <p className="learn-more ">
            <a href="#">Learn More</a>
          </p>
        </div>
      </article>
      <article className="section-content">
        <img
          src="images/mobile/image-stand-out.jpg"
          alt=""
          className="content-img wine"
        />
        <div className="content-text">
          <h3 className="content-text-title">
            Stand out to the right audience
          </h3>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <p className="learn-more2">Learn More</p>
        </div>
      </article>{" "}
      <div className="section-content-with-text">
        <article className="section-content intext-parent">
          <img
            src="images/mobile/image-graphic-design.jpg"
            alt=""
            className="content-img cherry"
          />
          <div className="content-text intext-child">
            <h3 className="content-text-title">Graphic Design</h3>
            <p className="hideOnTablet">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and capture potential client's
              attention.
            </p>
          </div>
        </article>
        <article className="section-content intext-parent">
          <img
            src="images/mobile/image-photography.jpg"
            alt=""
            className="content-img orange"
          />
          <div className="content-text intext-child">
            <h3 className="content-text-title">Photography</h3>
            <p className="hideOnTablet">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Main;
