import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//Styles
import { DetailWrapper } from "../styles";

//Components
import UpdateButton from "./buttons/UpdateButton";

import DeleteButton from "./buttons/DeleteButton";

const CookieDetail = () => {
  const { cookieSlug } = useParams();
  const cookies = useSelector((state) => state.cookies.cookies);
  const cookie = cookies.find((cookie) => cookie.slug === cookieSlug);

  if (!cookie) return <Redirect to="/cookies" />;

  return (
    <>
      <DetailWrapper>
        <h1>{cookie.name}</h1>
        <img src={cookie.image} alt={cookie.name} />
        <p>{cookie.description}</p>
        <p>{cookie.price} KWD</p>
        <UpdateButton cookie={cookie} />
        <DeleteButton cookieId={cookie} />
      </DetailWrapper>
    </>
  );
};

export default CookieDetail;
