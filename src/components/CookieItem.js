import { CookieWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

const CookieItem = ({ cookie, deleteCookie }) => {
  // // const cookie = props.cookie;
  // const { cookie } = props;

  return (
    <CookieWrapper key={cookie.name}>
      <Link to={`/cookies/${cookie.slug}`}>
        <img src={cookie.image} alt={cookie.name} />
      </Link>
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KWD</p>
      <DeleteButton
        cookieId={cookie.id}
        deleteCookie={deleteCookie}
      ></DeleteButton>
    </CookieWrapper>
  );
};

export default CookieItem;
