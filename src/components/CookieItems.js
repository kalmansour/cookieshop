import React from "react";

import styles from "../styles";

const CookieItem = (props) => {
  const cookie = props.cookie;
  console.log(props);
  return (
    <div style={styles.cookie} key={cookie.id}>
      <img style={styles.cookieImage} src={cookie.image} alt={cookie.name} />
      <p style={styles.text}>{cookie.name}</p>
      <p style={styles.text}>{cookie.price} KWD</p>
    </div>
  );
};

export default CookieItem;
