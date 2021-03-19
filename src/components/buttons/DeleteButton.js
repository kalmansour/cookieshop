import { useDispatch } from "react-redux";
import { deleteCookie } from "../../store/actions/cookieActions";

// Styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ cookieId }) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteCookie())}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
