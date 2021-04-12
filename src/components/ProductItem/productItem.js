import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { GET_PRODUCT_DATA } from "../../GraphQl/queries";
import Layout from "../Layout";
import Button from "../Button";
import ProductItemCarousel from "./productItemCarousel";

import image1 from "../../assets/images/best-gift.jpg";

import inStock from "../../assets/svg/in-stock.svg";
import star from "../../assets/svg/star-gold.svg";
import classes from "./productItem.module.css";

const ProductItem = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("red");
  const [size, setSize] = useState("chose");
  const [activeImage, setActiveImage] = useState(image1);
  const { urlKey } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_DATA, {
    variables: { route: urlKey },
  });

  // console.log(data, 77777);

  const changeQuantity = (n) => {
    if (quantity <= 1 && n === -1) return;
    setQuantity(quantity + n);
  };

  const onActiveImage = (url) => {
    setActiveImage(url);
  };
  return (
    <Layout>
      <div className={classes.section}>
        {data && (
          <>
            <div className={classes.productSlider}>
              <img
                // src={`https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${data.resolveUnknownRoute.item.images[0].path}`}
                src={activeImage}
                alt="img"
              />
              <ProductItemCarousel onActiveImage={onActiveImage} />
            </div>
            <div>
              <div>
                {data.resolveUnknownRoute.item ? (
                  <div className={classes.exist}>
                    <img src={inStock} alt="In Stock" />
                    <p>Առկա է</p>
                  </div>
                ) : (
                  <p>Առկա չէ</p>
                )}
              </div>
              <div className={classes.opinion}>
                <div className={classes.rating}>
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <p>Գրել կարծիք</p>
              </div>
              <h6 className={classes.title}>{data.resolveUnknownRoute.item.name}</h6>
              <div className={classes.price}>6.000Դ</div>
              <div className={classes.text}>
                Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի
                ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը
                քիչ թե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն»
                սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է:
              </div>
              <div className={classes.style}>
                <div className={classes.color}>
                  <p>ԳՈՒՅՆ։</p>
                  <select
                    name="car"
                    className={classes.colorOptions}
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  >
                    <option value="red">Կարմիր</option>
                    <option value="green">green</option>
                    <option value="white">white</option>
                    <option value="black">black</option>
                  </select>
                </div>
                <div className={classes.size}>
                  <p>ՉԱՓ։</p>
                  <select
                    name="car"
                    className={classes.sizeOptions}
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <option value="chose" disabled>
                      Ընտրել
                    </option>
                    <option value="ten">10</option>
                    <option value="twnety">20</option>
                    <option value="thirty">30</option>
                  </select>
                </div>
              </div>
              <div className={classes.quantity}>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    if (!e.target.value) return;
                    setQuantity(+e.target.value);
                  }}
                  className={classes.quantityNumber}
                />
                <div className={classes.arrows}>
                  <span className={classes.arrowTop} onClick={() => changeQuantity(1)}></span>
                  <span className={classes.arrowDown} onClick={() => changeQuantity(-1)}></span>
                </div>
                <Button classes={{ button: classes.productItemButton }}>ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂ</Button>
              </div>
              <div className={classes.code}>ԿՈԴ: 9591</div>
              <div className={classes.socialMedia}>
                <span className={classes.facebook}></span>
                <span className={classes.instagram}></span>
                <span className={classes.twitter}></span>
                <span className={classes.linkedin}></span>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default ProductItem;
