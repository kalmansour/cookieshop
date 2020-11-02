import { CookieWrapper } from "../styles";
const CookieItem = (props) => {
  const cookie = props.cookie;
  console.log(props);
  return (
    <CookieWrapper key={cookie.id}>
      <img src={cookie.image} alt={cookie.name} />
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KWD</p>
      <p>{}</p>
    </CookieWrapper>
  );
};

export default CookieItem;
