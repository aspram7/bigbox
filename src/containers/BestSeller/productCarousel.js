import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import data from "../../data-mockup/data";

import starGold from "../../assets/svg/star-gold.svg";
import starWhite from "../../assets/svg/star-white.svg";
import sign from "../../assets/svg/sign.svg";
import sold from "../../assets/svg/sold.svg";
import newTag from "../../assets/svg/tab-pastel-green.svg";
import saleTag from "../../assets/svg/tab-coral.svg";

import "./productCarousel.css";

function rating(n) {
  let ratingArray = [];
  for (let i = 1; i <= 5; i++) {
    ratingArray.push(i <= n);
  }
  return ratingArray;
}

const ProductCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1.2}
      totalSlides={5}
      interval={3000}
      isPlaying={true}
      infinite={true}
      visibleSlides={4}
      className="product-carousel"
    >
      <Slider moveThreshold={1}>
        {data
          .filter((el) => el.bestSeller)
          .map((el, idx) => {
            return (
              <Slide key={el.id} index={idx} className="product-carousel-item">
                <div className="product-carousel-img">
                  <img src={el.img} alt="img" />
                </div>
                <span className="sign">
                  <img src={el.exist ? sign : sold} alt="sign" />
                </span>
                <span className="tab">{el.new && <img src={newTag} alt="new" />}</span>
                <span className="tab">{el.sale && <img src={saleTag} alt="sale" />}</span>
                <div className="product-carousel-content">
                  <p className="product-title">{el.title}</p>
                  <p className="product-price">{el.originalPrice}</p>
                  <div className="product-rating">
                    {rating(el.rating).map((item, idx) => {
                      return <img key={idx} src={item ? starGold : starWhite} alt="star" />;
                    })}
                  </div>
                </div>
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

export default ProductCarousel;
