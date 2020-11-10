import { CookieWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

const CookieItem = (props) => {
  const cookie = props.cookie;

  return (
    <CookieWrapper key={cookie.id}>
      <Link to={`/cookies/${cookie.slug}`}>
        <img src={cookie.image} alt={cookie.name} />
      </Link>
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KWD</p>
      <DeleteButton
        cookieId={cookie.id}
        deleteCookie={props.deleteCookie}
      ></DeleteButton>
    </CookieWrapper>
  );
};

export default CookieItem;
