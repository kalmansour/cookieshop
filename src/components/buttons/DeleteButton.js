import cookieStore from "../../stores/cookieStore";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ cookieId }) => {
  const handleDelete = () => {
    cookieStore.deleteCookie(cookieId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
