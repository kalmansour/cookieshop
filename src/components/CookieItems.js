import { CookieWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const CookieItem = (props) => {
  const cookie = props.cookie;

  return (
    <CookieWrapper key={cookie.id}>
      <img
        src={cookie.image}
        alt={cookie.name}
        onClick={() => props.setCookie(cookie)}
      />
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
