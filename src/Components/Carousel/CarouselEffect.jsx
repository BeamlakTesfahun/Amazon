import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={false}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img key={imageItemLink} src={imageItemLink} />;
          // <div key={index}>
          //   <img src={imageItemLink} alt={`Image ${index}`} />
          // </div>
        })}
      </Carousel>
      <div className={classes.hero__ing}> </div>
    </div>
  );
}

export default CarouselEffect;
