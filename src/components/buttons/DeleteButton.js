import React from "react";
import { DeleteButtonStyled } from "../../styles";
import cookieStore from "../../stores/cookieStore";

const DeleteButton = ({ cookieId }) => {
  const handleDelete = () => {
    cookieStore.deleteCookie(cookieId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
