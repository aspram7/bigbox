import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DATA } from "../../GraphQl/queries";
import classes from "./productItem.module.css"

const ProductItem = () => {
    const { loading, error, data } = useQuery(GET_PRODUCT_DATA, {
        variables: { route: "Volvo-v3-1-8337" },
      });
   

      return (
              <div className={classes.section}>
                {data && <><img src={`https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${data.resolveUnknownRoute.item.images[0].path}`} alt="img" />
             <div>{data.resolveUnknownRoute.item.name}</div></>}
       </div>
        
      )
}

export default ProductItem;