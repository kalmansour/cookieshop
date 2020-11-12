import React from "react";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ cookieId, deleteCookie }) => {
  const handleDelete = () => {
    deleteCookie(cookieId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
