import { Route, Switch } from "react-router";
import { observer } from "mobx-react";
//Components
import BakeryList from "../components/BakeryList";
import BakeryDetail from "../components/BakeryDetail";
import CookieList from "../components/CookieList";
import CookieDetail from "../components/CookieDetail";
import Home from "../components/Home";

//Stores
import cookieStore from "../stores/cookieStore";

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
