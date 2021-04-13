import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router";
import { GET_PRODUCT_DATA, SET_OPTIONS_DATA } from "../../GraphQl/queries";
import Layout from "../Layout";
import Button from "../Button";
import ProductItemCarousel from "./productItemCarousel";
import Form from "../Form";

import inStock from "../../assets/svg/in-stock.svg";
import star from "../../assets/svg/star-gold.svg";
import starWhite from "../../assets/svg/star-white.svg";
import classes from "./productItem.module.css";

const ProductItem = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("red");
  const [size, setSize] = useState("chose");
  const [aboutProduct, setAboutProduct] = useState(0);
  const { urlKey } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_DATA, {
    variables: { route: urlKey },
  });

  const changeQuantity = (n) => {
    if (quantity <= 1 && n === -1) return;
    setQuantity(quantity + n);
  };
  const changeContent = (n) => {
    setAboutProduct(n);
  };

  return (
    <Layout>
      <div className={classes.section}>
        <div className={classes.sectionTop}>
          <>
            {data &&
              data.resolveUnknownRoute.item.images.map((el, idx) => {
                return <ProductItemCarousel />;
              })}
          </>
          <div>
            <div>
              {data && data.resolveUnknownRoute.item ? (
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
            <h6 className={classes.title}>{data && data.resolveUnknownRoute.item.name}</h6>
            <div className={classes.price}>{data && data.resolveUnknownRoute.item.price}</div>
            <div className={classes.text}>
              Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի
              ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը
              քիչ թե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական
              կրկննության, ինչը ընթերցողի համար հասկանալի է:
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
        </div>
        <div className={classes.sectionBottom}>
          <div className={classes.titles}>
            <h6
              className={aboutProduct === 0 ? classes.active : classes.descriptionTitle}
              onClick={() => changeContent(0)}
            >
              ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ
            </h6>
            <h6
              className={aboutProduct === 1 ? classes.active : classes.parameterTitle}
              onClick={() => changeContent(1)}
            >
              ՊԱՐԱՄԵՏՐԵՐ
            </h6>
            <h6
              className={aboutProduct === 2 ? classes.active : classes.opinionsTitle}
              onClick={() => changeContent(2)}
            >
              ԿԱՐԾԻՔՆԵՐ
            </h6>
          </div>
          <div className={classes.description}>
            {aboutProduct === 0 && (
              <div className={classes.descriptionBody}>
                <p>
                  Շատ համակարգչային տպագրական ծրագրեր և ինտերնետային էջերի խմբագրիչներ այն
                  օգտագործում են որպես իրենց ստանդարտ տեքստային մոդել, և հետևապես, ինտերնետում Lorem
                  Ipsum-ի որոնման արդյունքում կարելի է հայտնաբերել էջեր, որոնք դեռ նոր են կերտվում:
                  Ժամանակի ընթացքում ձևավորվել են Lorem Ipsum-ի տարբեր վերսիաներ` երբեմն ներառելով
                  պատահական տեքստեր, երբեմն էլ հատուկ իմաստ (հումոր և նմանատիպ բովանդակություն):
                </p>
                <ul>
                  <li>Ամուր կազմ</li>
                  <li>Կորացված անկյուններ</li>
                  <li>Առաձգական փակում</li>
                  <li>Էջանշան</li>
                </ul>
              </div>
            )}
          </div>
          <div className={classes.parameter}>
            {aboutProduct === 1 && (
              <div className={classes.parameterBody}>
                <table>
                  <tbody>
                    <tr>
                      <td>Տեսակ</td>
                      <td>Հաստ կազմ</td>
                    </tr>
                    <tr>
                      <td>Չափ</td>
                      <td>20x20</td>
                    </tr>
                    <tr>
                      <td>Էջեր</td>
                      <td>240</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className={classes.opinions}>
            {aboutProduct === 2 && (
              <div className={classes.opinionsBody}>
                <h5>ԳՐԵԼ ԿԱՐԾԻՔ</h5>
                <div>
                  <p>Գնահատական</p>
                  <div className={classes.optionRating}>
                    <img src={starWhite} alt="star" />
                    <img src={starWhite} alt="star" />
                    <img src={starWhite} alt="star" />
                    <img src={starWhite} alt="star" />
                    <img src={starWhite} alt="star" />
                  </div>
                </div>
                <Form />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductItem;
