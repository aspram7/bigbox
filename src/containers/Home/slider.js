import React from 'react';
import { CarouselProvider, Slider, Slide, Image, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Button from "../../components/Button";

import image1 from "../../assets/images/section-image-large.jpg"
import image2 from "../../assets/images/section-image-large-pastel-green.jpg"
import image3 from "../../assets/images/section-image-large-rose.jpg"

import classes from "./slider.module.css"

const SliderMain = ({className, children}) => {
    const sliderContent = [
        {
            id: 0,
            img: image1,
            content: `<div>
            <p>
              ԺԱՄԱՑՈՒՅՑՆԵՐ <br /> <span>ԶԵՂՉ</span>
            </p>
            <div>20%-30%</div>
          </div>`
        },
        {
            id: 1,
            img: image2,
            content: `<div>
            <p>
              ԺԱՄԱՑՈՒՅՑՆԵՐ <br /> <span>ԶԵՂՉ</span>
            </p>
            <div>20%-30%</div>
          </div>`
        },
        {
            id: 2,
            img: image3,
            content: `<div>
            <p>
              ԺԱՄԱՑՈՒՅՑՆԵՐ <br /> <span>ԶԵՂՉ</span>
            </p>
            <div>20%-30%</div>
          </div>`
        },
    ]
    
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
            {sliderContent.map(el => {
                return (
                    <Slide key={el.id} index={el.id}><Image src={el.img}/>
                    <div className={classes.sliderContentAll}>
                        <div className={classes.sliderContent} dangerouslySetInnerHTML={{__html: el.content}}>
                        </div>
                        <Button classes={{button: classes.sliderButton}}>ԱՎԵԼԻՆ</Button>
                    </div>
                    </Slide>
                )
            })}
        </Slider>
        <DotGroup className={className} />
      </CarouselProvider>
    )
}

export default SliderMain;