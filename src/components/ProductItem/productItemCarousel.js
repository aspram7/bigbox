import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { GET_PRODUCT_DATA } from "../../GraphQl/queries";

import "./productItemCarousel.css";

const ProductItemCarousel = () => {
  const { urlKey } = useParams();
  const { data } = useQuery(GET_PRODUCT_DATA, {
    variables: { route: urlKey },
  });

  const [activeImage, setActiveImage] = useState(
    `https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${
      data && data.resolveUnknownRoute.item.images[0].path
    }`
  );

  useEffect(() => {
    return () => {
      setActiveImage(
        `https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${
          data && data.resolveUnknownRoute.item.images[0].path
        }`
      );
    };
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={2}
      visibleSlides={1}
      className="product-item-carousel"
    >
      <Slider>
        {data &&
          data.resolveUnknownRoute.item.images.map((el, idx) => {
            return (
              <Slide index={idx} key={idx}>
                <img src={activeImage} alt="" />
              </Slide>
            );
          })}
      </Slider>
      <div className="product-item-arrow-button">
        <ButtonBack className="product-item-button-back"></ButtonBack>
        {data &&
          data.resolveUnknownRoute.item.images.map((el, idx) => {
            return (
              <Dot
                index={idx}
                key={idx}
                onClick={() =>
                  setActiveImage(
                    `https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${el.path}`
                  )
                }
              >
                <img
                  src={`https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${el.path}`}
                  alt=""
                />
              </Dot>
            );
          })}
        <ButtonNext className="product-item-button-next"></ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default ProductItemCarousel;
