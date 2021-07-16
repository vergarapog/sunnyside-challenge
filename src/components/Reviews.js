import React from "react";

const Reviews = () => {
  return (
    <section className="review-section">
      <h2 className="review-title">Client Testimonials</h2>
      <div className="reviews">
        <article className="article-review">
          <img src="images/image-emily.jpg" alt="" className="client-img" />
          <p className="client-text">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="client-info">
            <p className="client-name">Emily R.</p>
            <p className="client-title">Marketing Director</p>
          </div>
        </article>
        <article className="article-review">
          <img src="images/image-thomas.jpg" alt="" className="client-img" />
          <p className="client-text">
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's sucess made it a satisfying and enjoyable experience.
          </p>
          <div className="client-info">
            <p className="client-name">Thomas S.</p>
            <p className="client-title">Chief Operating Officer</p>
          </div>
        </article>
        <article className="article-review">
          <img src="images/image-jennie.jpg" alt="" className="client-img" />
          <p className="client-text">
            Incredible end result! Our sales increase over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className="client-info">
            <p className="client-name">Jennie F.</p>
            <p className="client-title">Business Owner</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Reviews;
