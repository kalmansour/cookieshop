// React
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";

// Redux
import { useDispatch } from "react-redux";
import { createCookie, updateCookie } from "../../store/actions/cookieActions";

// Styles
import { CreateButtonStyled } from "../../styles";

const CookieModal = ({ bakery, isOpen, closeModal, oldCookie }) => {
  const dispatch = useDispatch();
  const history = useHistory();

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
    // dispatch[oldCookie ? "updateCookie" : "createCookie"](cookie, bakery);
    if (oldCookie) dispatch(updateCookie(cookie, bakery));
    else dispatch(createCookie(cookie, bakery));
    history.push("/cookies");
    // closeModal();
  };

  const handleImage = (event) => {
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
            onChange={handleImage}
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
