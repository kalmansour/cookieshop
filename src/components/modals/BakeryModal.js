// React
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";

// Redux
import { useDispatch } from "react-redux";
import { createBakery } from "../../store/actions/bakeryActions";

// Styles
import { CreateButtonStyled } from "../../styles";

const BakeryModal = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [bakery, setBakery] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setBakery({ ...bakery, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createBakery(bakery));
    history.push("/bakeries");
    // closeModal();
  };

  const handleImage = (event) => {
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
            onChange={handleImage}
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
