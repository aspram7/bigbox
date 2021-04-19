import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "../containers/Cart";
import Header from "../components/Header";
import Sections from "../containers/Sections";
import ProductItem from "../containers/ProductItem/productItem";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Sections} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/product/:urlKey" component={ProductItem} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
