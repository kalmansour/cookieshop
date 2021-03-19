import { Redirect, useParams } from "react-router";
import { observer } from "mobx-react";
import { useSelector } from "react-redux";

//Stores
import cookieStore from "../stores/cookieStore";

//Components
import CookieList from "./CookieList";
import UpdateButton from "./buttons/UpdateButton";
import AddButton from "./buttons/AddButton";

//Styles
import { DetailWrapper } from "../styles";
import authStore from "../stores/authStore";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();
  const bakeries = useSelector((state) => state.bakeries);
  // const cookies = useSelector((state) => state.cookies);

  const bakery = bakeries.find((bakery) => bakery.slug === bakerySlug);

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
        {authStore.user && <AddButton bakery={bakery} />}
      </div>
    </div>
  );
};
export default observer(BakeryDetail);
