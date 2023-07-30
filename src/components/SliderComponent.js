// Carousel.js

import React from "react";
import Slider from "react-slick";

const SliderComponent = ({
  title,
  imageUrl,
  imageAlt,
  content1,
  content2,
  content3,
  position,
}) => {
  const settingsSlide = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 5000,
    arrows: false,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settingsSlide} dots={true}>
      <section className="content-1">
        <div className={`${position}-desc`}>
          <div className="athlete-header">
            <span className="number">01</span> CONNECTION
          </div>
          <p className="athlete-text">{content1}</p>
        </div>
      </section>
      <section className="content-2">
        <div className={`${position}-desc`}>
          <div className="athlete-header">
            <span className="number">02</span> COLLABORATION
          </div>
          <p className="athlete-text">{content2}</p>
        </div>
      </section>
      <section className={`content-3-${position}`}>
        <div className={`${position}-desc`}>
          <div className="athlete-header">
            <span className="number">03</span> GROWTH
          </div>
          <p className="athlete-text">{content3}</p>
        </div>
      </section>
    </Slider>
  );
};

export default SliderComponent;
