import { Redirect, useParams } from "react-router";
import { observer } from "mobx-react";

//Stores
import bakeryStore from "../stores/bakeryStore";
import cookieStore from "../stores/cookieStore";

//Styles
import { DetailWrapper } from "../styles";
import CookieList from "./CookieList";
import UpdateButton from "./buttons/UpdateButton";
import AddButton from "./buttons/AddButton";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();

  const bakery = bakeryStore.bakeries.find(
    (bakery) => bakery.slug === bakerySlug
  );

  if (!bakery) return <Redirect to="/bakeries" />;

  const cookies = bakery.cookies.map((cookie) =>
    cookieStore.getCookieById(cookie.id)
  );

  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h4>{bakery.name}</h4>
          <img src={bakery.image} alt={bakery.name} />
          <UpdateButton bakery={bakery} />
        </DetailWrapper>
      </div>
      <div className="col-12">
        <CookieList cookies={cookies} />
        <AddButton bakery={bakery} />
      </div>
    </div>
  );
};
export default observer(BakeryDetail);
