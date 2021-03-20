import { Description, ShopImage, Title } from "../../styles";

import React from "react";

const Home = () => {
  return (
    <>
      <Title>CookiesnDream</Title>
      <Description>Cookies Beyond Your Wildest Dreams</Description>
      <ShopImage
        src="https://media.glassdoor.com/l/41/e9/34/0f/insomnia-16th-street.jpg"
        alt="Cookie Store"
      />
    </>
  );
};

export default Home;
