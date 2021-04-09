import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BestSeller from "../containers/BestSeller"

const AppRoutes = () => {
    return (
        <Router>
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/product/:urlKey" component={BestSeller} />
            </Switch>
        </Router>
    );
  }
  
  export default AppRoutes;