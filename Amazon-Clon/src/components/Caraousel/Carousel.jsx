import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imgItemLink) => {
          return <img src={imgItemLink} />;
        })}
      </Carousel>
      <div className="hero_image"></div>
    </div>
  );
}

export default CarouselEffect;
