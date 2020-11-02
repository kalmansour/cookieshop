import React from "react";

//Styling
import styles from "../styles";

//Data
import cookies from "../cookies";

// Componets
import CookieItem from "./CookieItems";

const CookieList = () => {
  const cookieList = cookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));
  return <div style={styles.list}>{cookieList}</div>;
};

export default CookieList;
