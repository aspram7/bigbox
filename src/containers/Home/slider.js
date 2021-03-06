import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useLazyQuery } from "@apollo/client";
import { GET_SLIDER_IMAGES } from "../../GraphQl/queries";
import Button from "../../components/Button";
import ImageProduct from "../../components/Image";

import classes from "./slider.module.css";

const SliderMain = ({ className }) => {
  const [sizes, setSizes] = useState([]);

  const [getSliderImage, { loading, error, data }] = useLazyQuery(GET_SLIDER_IMAGES, {
    variables: { sliderId: "606ec4f87a26b539448f40e0" },
  });

  const handleSizes = (width, height) => {
    setSizes([...sizes, { width, height }]);
  };

  useEffect(() => {
    getSliderImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <h1>error</h1>;
  if (loading) return <h1>loading</h1>;

  return (
    <>
      <CarouselProvider
        naturalSlideWidth={sizes[0] ? sizes[0].width : 0}
        naturalSlideHeight={sizes[0] ? sizes[0].height : 0}
        totalSlides={2}
        interval={3000}
        isPlaying={true}
        infinite={true}
      >
        <Slider>
          {data &&
            data.slider.slides.map((el) => {
              return (
                <Slide key={el.id} index={el.id}>
                  <ImageProduct
                    imgUrl={`https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${el.image}`}
                    handleSizes={handleSizes}
                  />
                  <div className={el.contentPosition}>
                    <div dangerouslySetInnerHTML={{ __html: el.content }}></div>
                    <Button classes={{ button: classes.sliderButton }}>ԱՎԵԼԻՆ</Button>
                  </div>
                </Slide>
              );
            })}
        </Slider>
        <DotGroup className={className} />
      </CarouselProvider>
    </>
  );
};

export default SliderMain;
