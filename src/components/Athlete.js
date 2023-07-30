// Athlete.js

import React from "react";

const Athlete = ({
  id,
  content1,
  content2,
  content3,
  imageAlt,
  imageMobileUrl,
  imageIpadUrl,
  imageDesktopUrl,
  title,
  position,
  isLastLoop,
  isMobile,
  isiPad,
}) => {
  const imageUrl = isMobile
    ? imageMobileUrl
    : isiPad
    ? imageIpadUrl
    : imageDesktopUrl;
  return (
    <div className={`athlete split-content ${isLastLoop ? "last" : ""}`}>
      <section className={`${position}-image`}>
        <img src={imageUrl} alt={imageAlt} />
      </section>
      <section className="content-sec">
        <div className={`athlete-title-${position}`}>{title}</div>
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
      </section>
    </div>
  );
};

export default Athlete;
