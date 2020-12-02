import { Link } from "react-router-dom";
import { BakeryItemStyled } from "../styles";

const BakeryItem = ({ bakery }) => {
  return (
    <BakeryItemStyled>
      <Link to={`/bakeries/${bakery.slug}`}>
        <img src={bakery.image} alt={bakery.name} />
        <h4>{bakery.name}</h4>
      </Link>
    </BakeryItemStyled>
  );
};

export default BakeryItem;
