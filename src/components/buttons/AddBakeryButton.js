import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import BakeryModal from "../modals/BakeryModal";

const AddBakeryButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <BakeryModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddBakeryButton;
