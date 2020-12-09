import { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import bakeryStore from "../../stores/bakeryStore";

const BakeryModal = ({ isOpen, closeModal }) => {
  const [bakery, setBakery] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setBakery({ ...bakery, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    bakeryStore.createBakery(bakery);
    closeModal();
  };

  const hangleImage = (event) => {
    setBakery({ ...bakery, image: event.target.files[0] });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Bakery Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              value={bakery.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            required
            name="image"
            type="file"
            className="form-control"
            onChange={hangleImage}
          />
        </div>
        <CreateButtonStyled type="submit" className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default BakeryModal;
