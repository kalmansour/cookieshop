import React from "react";
import { DetailWrapper } from "../styles";

const CookieDetail = (props) => {
  const cookie = props.cookie;
  if (cookie) {
    return (
      <DetailWrapper>
        <h1>{cookie.name}</h1>
        <img src={cookie.image} alt={cookie.name} />
        <p>{cookie.description}</p>
        <p>{cookie.price} KWD</p>
      </DetailWrapper>
    );
  } else return null;
};

export default CookieDetail;
