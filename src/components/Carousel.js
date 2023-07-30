import React from "react";
import SliderComponent from "./SliderComponent";

const Carousel = ({ data }) => {
  return (
    <div className="slider-container container">
      {data.map((row, index) => {
        return (
          <div className="slider-container container">
            <div className="row mt-4 mt-md-5 d-flex m-0">
              <div className={`athlete-title-${row.position}`}>{row.title}</div>
              <div className="image">
                <img src={row.imageMobileUrl} alt={row.imageAlt} />
              </div>
              <SliderComponent {...row} key={index} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
