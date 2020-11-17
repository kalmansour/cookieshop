import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import { CookieWrapper } from "../styles";

//Buttons
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const CookieItem = ({ cookie }) => {
  return (
    <CookieWrapper key={cookie.name}>
      <Link to={`/cookies/${cookie.slug}`}>
        <img src={cookie.image} alt={cookie.name} />
      </Link>
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KWD</p>
      <UpdateButton cookie={cookie} />
      <DeleteButton cookieId={cookie.id}></DeleteButton>
    </CookieWrapper>
  );
};

export default observer(CookieItem);
