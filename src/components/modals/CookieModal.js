import { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import cookieStore from "../../stores/cookieStore";

const CookieModal = ({ bakery, isOpen, closeModal, oldCookie }) => {
  const [cookie, setCookie] = useState(
    oldCookie ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setCookie({ ...cookie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    cookieStore[oldCookie ? "updateCookie" : "createCookie"](cookie, bakery);
    closeModal();
  };

  const hangleImage = (event) => {
    setCookie({ ...cookie, image: event.target.files[0] });
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
              value={cookie.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              value={cookie.price}
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
            value={cookie.description}
            name="description"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
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
          {oldCookie ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default CookieModal;
