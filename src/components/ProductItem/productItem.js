import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { GET_PRODUCT_DATA } from "../../GraphQl/queries";
import Layout from "../Layout";

import inStock from "../../assets/svg/in-stock.svg";
import classes from "./productItem.module.css";

const ProductItem = () => {
  const { urlKey } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_DATA, {
    variables: { route: urlKey },
  });

  console.log(data, 77777);

  return (
    <Layout>
      <div className={classes.section}>
        {data && (
          <>
            <img
              src={`https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${data.resolveUnknownRoute.item.images[0].path}`}
              alt="img"
            />
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
              {data.resolveUnknownRoute.item.name}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default ProductItem;
