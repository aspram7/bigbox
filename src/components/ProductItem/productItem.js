import { useEffect, useState } from "react";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router";
import StarRatings from "react-star-ratings";
import { GET_PRODUCT_DATA, GET_PRODUCT_REVIEWS, CREATE_CART, ADD_ITEM_CART } from "../../GraphQl/queries";
import Layout from "../Layout";
import Button from "../Button";
import { ColorSelect } from "../DropDown";
import ProductItemCarousel from "./productItemCarousel";
import ReviewForm from "../ReviewForm";

import inStock from "../../assets/svg/in-stock.svg";
import classes from "./productItem.module.css";

const ProductItem = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("red");
  const [size, setSize] = useState("chose");
  const [aboutProduct, setAboutProduct] = useState(0);
  const [review, setReview] = useState({
    rating: 0,
    name: "",
    review: "",
  });

  const { urlKey } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_DATA, {
    variables: { route: urlKey },
  });

  const [getProductReviews, { data: dataReview }] = useLazyQuery(GET_PRODUCT_REVIEWS, {
    variables: { productId: data && data.resolveUnknownRoute.id },
  });

  useEffect(() => {
    if(data){
      getProductReviews();
    }
  }, [data]);

  const changeQuantity = (n) => {
    if (quantity <= 1 && n === -1) return;
    setQuantity(quantity + n);
  };

  const changeContent = (n) => {
    setAboutProduct(n);
  };

  const changeRating = (newRating, name) => {
    setReview({ ...review, rating: newRating });
  };

  const handleReview = (rating, name, review) => {
    setReview({
      rating: rating,
      name: name,
      review: review,
    });
  };

  const [setCreateCart, { data: createCardId }] = useMutation(CREATE_CART);
  // const { data: cartData } = useQuery(CART_QUERY, {
  //   variables: { cartId: createCardId && createCardId.createCart },
  // });
  const [setItemCart, { data: addItemToCart }] = useMutation(ADD_ITEM_CART);

  console.log(addItemToCart, 555555555)

  const handleCart = () => {
      if (localStorage.getItem('id')) {
        return
      } else {
      //   new Promise((resolve) => {
      //     resolve(setCreateCart());
      // }).then(res => {
      //     localStorage.setItem("id", res.data.createCart)
      // })
      (async () => {
        let res = await setCreateCart();
        await localStorage.setItem("id", res.data.createCart);
        await setItemCart({
          variables: { cartId : res.data.createCart},
        });
      })();
    }
  }

  return (
    <Layout>
      <div className={classes.section}>
        <div className={classes.sectionTop}>
          <>
            {data &&
              data.resolveUnknownRoute.item.images.map((el, idx) => {
                return <ProductItemCarousel key={idx} />;
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
                <StarRatings
                  rating={2.403}
                  starDimension="10px"
                  starSpacing="1px"
                  starRatedColor="#FFC107"
                  starEmptyColor="#ECEFF1"
                />
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
                <ColorSelect colorName="color" value="red" onChange={() => {}} children="red" />
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
              <Button classes={{ button: classes.productItemButton }} onClick={handleCart}>ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂ</Button>
            </div>
            <div className={classes.code}>ԿՈԴ: {data && data.resolveUnknownRoute.id}</div>
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
                {dataReview &&
                  dataReview.productReviews.map((el, idx) => {
                    return (
                      <div className={classes.opinionspeople} key={idx}>
                        <StarRatings
                          rating={el.rating}
                          starDimension="10px"
                          starSpacing="1px"
                          starRatedColor="#FFC107"
                          starEmptyColor="#ECEFF1"
                        />
                        <div className={classes.opinionsRating}>
                          <p className={classes.opinionName}>{el.name}</p>
                          <p>/ 01.04.2019</p>
                        </div>
                        <p>{el.review}</p>
                      </div>
                    );
                  })}

                <h5>ԳՐԵԼ ԿԱՐԾԻՔ</h5>
                <div className={classes.optionRating}>
                  <p>Գնահատական</p>
                  <div>
                    <StarRatings
                      rating={review.rating}
                      changeRating={changeRating}
                      numberOfStars={5}
                      name="rating"
                      starDimension="13px"
                      starSpacing="1px"
                      starRatedColor="#FFC107"
                      starHoverColor="#FFC107"
                      starEmptyColor="#ECEFF1"
                    />
                  </div>
                </div>
                <ReviewForm
                  rating={review.rating}
                  productId={data && data.resolveUnknownRoute.id}
                  handleReview={handleReview}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductItem;
