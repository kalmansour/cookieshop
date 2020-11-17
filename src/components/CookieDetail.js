import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//Stores
import cookieStore from "../stores/cookieStore";

//Styles
import { DetailWrapper } from "../styles";

//Components
import UpdateButton from "./buttons/UpdateButton";

import DeleteButton from "./buttons/DeleteButton";

const CookieDetail = () => {
  const { cookieSlug } = useParams();

  const cookie = cookieStore.cookies.find(
    (cookie) => cookie.slug === cookieSlug
  );

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

export default observer(CookieDetail);
