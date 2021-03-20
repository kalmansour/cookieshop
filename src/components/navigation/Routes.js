import { Route, Switch } from "react-router";
import { observer } from "mobx-react";
//Components
import BakeryList from "../bakeries/BakeryList";
import BakeryDetail from "../bakeries/BakeryDetail";
import CookieList from "../cookies/CookieList";
import CookieDetail from "../cookies/CookieDetail";
import Home from "../home/Home";

//Stores
import cookieStore from "../../stores/cookieStore";

const Routes = () => {
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
        <CookieList cookies={cookieStore.cookies} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
