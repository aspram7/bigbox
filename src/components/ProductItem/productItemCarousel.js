import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import image1 from "../../assets/images/best-gift.jpg";
import image2 from "../../assets/images/book-author.jpg";
import image3 from "../../assets/images/coffee-cup.jpg";

import "./productItemCarousel.css";

const ProductItemCarousel = (props) => {
  const imageArray = [image1, image2, image3];

  const handleImage = (url) => {
    props.onActiveImage(url);
  };

  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={3}
      interval={3000}
      isPlaying={true}
      infinite={true}
      visibleSlides={3}
      className="product-item-carousel"
    >
      <Slider moveThreshold={1}>
        {imageArray.map((el, idx) => {
          return (
            <Slide index={idx} key={idx}>
              <img src={el} alt="" onClick={() => handleImage(el)} />
            </Slide>
          );
        })}
      </Slider>
      <div className="arrow-button">
        <ButtonBack className="button-back"></ButtonBack>
        <ButtonNext className="button-next"></ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default ProductItemCarousel;
