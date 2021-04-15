import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useLazyQuery } from "@apollo/client";
import { GET_PRODUCTS_DATA } from "../../GraphQl/queries";

import "./productCarousel.css";

const ProductCarousel = () => {
  const history = useHistory();
  const [getProduct, { data }] = useLazyQuery(GET_PRODUCTS_DATA, {
    variables: { categoryId: "602e537c205367233c805511" },
  });

  const handleProduct = (key) => {
    history.push(`/product/${key}`);
  };

  useEffect(() => {
    getProduct();
  }, []);

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
        {data &&
          data.getCategoryProducts.products.map((el, idx) => {
            return (
              <Slide
                key={el.id}
                index={idx}
                className="product-carousel-item"
                onClick={() => handleProduct(el.urlKey)}
              >
                <div className="product-carousel-img">
                  <img
                    src={`https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${el.images[0].path}`}
                    alt="img"
                  />
                </div>
                <div className="product-carousel-content">
                  <p className="product-title">{el.name}</p>
                  <p className="product-price">{el.price}</p>
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
