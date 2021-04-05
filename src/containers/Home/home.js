import React from "react";
import Slider from "./slider";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
import topRight from "../../assets/images/section-image-top-right.jpg";
import bottomRight from "../../assets/images/section-image-bottom-right.jpg";
import bestGift from "../../assets/images/best-gift.jpg";
import kitchenCup from "../../assets/images/kitchen-cup.jpg";
import bookAuthor from "../../assets/images/book-author.jpg";
import coffeeCup from "../../assets/images/coffee-cup.jpg";

import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={classes.section}>
      <div className={classes.slider}>
        <Slider className={"sliderDots"}>
          {/* <div className={classes.sliderText}>
            <p>
              ԺԱՄԱՑՈՒՅՑՆԵՐ <br /> <span>ԶԵՂՉ</span>
            </p>
            <div>20%-30%</div>
            <Button>ԱՎԵԼԻՆ</Button>
          </div> */}
        </Slider>
      </div>
      <Banner classes={{ banner: classes.bannerTop }} url={topRight} bannerText={"top-left"}>
        <p>
          ԶՎԱՐՃԱԼԻ <br /> <span>ՆՎԵՐՆԵՐ</span>
        </p>
      </Banner>
      <Banner
        classes={{ banner: classes.bannerBottom }}
        url={bottomRight}
        bannerText={"bottom-right"}
      >
        <p className={classes.text}>ԳՐԱՍԵՆՅԱԿԱՅԻՆ</p>
        <p className={classes.textSale}>-70%</p>
      </Banner>
      <Banner
        classes={{ banner: classes.bannerBestGift }}
        url={bestGift}
        bannerText={"bottom-right"}
      >
        <p className={classes.textSale}>-10%</p>
        <p className={classes.text}>
          ԼԱՎԱԳՈՒՅՆ <br /> <span>ՆՎԵՐՆԵՐ</span>
        </p>
      </Banner>
      <Banner
        classes={{ banner: classes.bannerKitchenCup }}
        url={kitchenCup}
        bannerText={"bottom-right"}
      >
        <p>
          ԽՈՀԱՆՈՑԱՅԻՆ <br />
          <span>ԲԱԺԱԿ</span>
        </p>
      </Banner>
      <Banner
        classes={{ banner: classes.bannerBookAuthor }}
        url={bookAuthor}
        bannerText={"bottom-left"}
      >
        <p>
          ԳԻՐՔ <br />
          <span>ՀԵՂԻՆԱԿ</span>
        </p>
      </Banner>
      <Banner
        classes={{ banner: classes.bannerCoffeeCup }}
        url={coffeeCup}
        bannerText={"center-right"}
      >
        <p className={classes.newProducts}>Նոր Տեսականի</p>
        <p className={classes.text}>
          ՍՈՒՐՃԻ <br />
          <span>ԲԱԺԱԿ</span>
        </p>
      </Banner>
    </div>
  );
};

export default Home;
