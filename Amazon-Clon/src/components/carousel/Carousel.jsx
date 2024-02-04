import React from "react";
import { Carousel } from "react-responsive-carousel";
import { image } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEfect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {image.map((imageItemLink) => {
          return <img src={imageItemLink} />;
        })}
      </Carousel>
      {/* <div className="fade_images"></div> */}
    </div>
  );
}

export default CarouselEfect;
