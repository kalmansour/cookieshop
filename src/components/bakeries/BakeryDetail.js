import { Redirect, useParams } from "react-router";

// Redux
import { useSelector } from "react-redux";

// Buttons
import UpdateButton from "../buttons/UpdateButton";
import AddButton from "../buttons/AddButton";

//Components
import CookieList from "../cookies/CookieList";

//Styles
import { DetailWrapper } from "../../styles";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();

  const user = useSelector((state) => state.authReducer.user);

  const bakery = useSelector((state) =>
    state.bakeries.find((_bakery) => _bakery.slug === bakerySlug)
  );

  if (!bakery) return <Redirect to="/bakeries" />;

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
        <CookieList cookies={bakery.cookies} />
        {user && <AddButton bakery={bakery} />}
      </div>
    </div>
  );
};
export default BakeryDetail;
