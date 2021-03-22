import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

//Components
import BakeryList from "../bakeries/BakeryList";
import BakeryDetail from "../bakeries/BakeryDetail";
import CookieList from "../cookies/CookieList";
import CookieDetail from "../cookies/CookieDetail";
import Home from "../home/Home";

const Routes = () => {
  const cookies = useSelector((state) => state.cookieReducer.cookies);

  return (
    <Switch>
      <Route path="/bakeries/:bakerySlug">
        <BakeryDetail />
      </Route>
      <Route path="/bakeries">
        <BakeryList />
      </Route>
      <Route path="/cookies/:cookieSlug">
        <CookieDetail />
      </Route>
      <Route path="/cookies">
        <CookieList cookies={cookies} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
