import React from 'react';
import { CarouselProvider, Slider, Slide, Image, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import image1 from "../../assets/images/section-image-large.jpg"
import image2 from "../../assets/images/section-image-large-pastel-green.jpg"
import image3 from "../../assets/images/section-image-large-rose.jpg"

const SliderMain = ({className, children}) => {
    return(
        <CarouselProvider
            naturalSlideWidth={2}
            naturalSlideHeight={1.5}
            totalSlides={3}
            interval={3000}
            isPlaying={true}
            infinite={true}
        >
        <Slider>
            <Slide index={0}><Image src={image1}/></Slide>
            <Slide index={1}><Image src={image2}/></Slide>
            <Slide index={2}><Image src={image3}/></Slide>    
        </Slider>
        {children}
        <DotGroup className={className} />
      </CarouselProvider>
    )
}

export default SliderMain;