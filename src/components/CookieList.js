// import styles from "../styles";
import cookies from "../cookies";
import CookieItem from "./CookieItems";
// Styling
import { ListWrapper } from "../styles";

const CookieList = () => {
  const cookieList = cookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));
  return <ListWrapper>{cookieList}</ListWrapper>;
};

export default CookieList;
