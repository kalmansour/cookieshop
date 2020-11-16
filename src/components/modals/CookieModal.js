import Modal from "react-modal";
import { useState } from "react";
import cookieStore from "../../stores/cookieStore";

//styles
import { CreateButtonStyled } from "../../styles";

const CookieModal = ({ isOpen, closeModal, createCookie }) => {
  const [cookie, setCookie] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setCookie({ ...cookie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    cookieStore.createCookie(cookie);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Cookie Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              name="price"
              onChange={handleChange}
              type="number"
              min="1"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <CreateButtonStyled type="submit" className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default CookieModal;
