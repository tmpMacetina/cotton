/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.scss";

const Modal = props => {
  return ReactDOM.createPortal(
    <>
      <div className="modal">
        <div className="modalImgContainer">
          <img className="modalImg" src={props.image} alt="modal" />
        </div>
        <div className="modalInfo">
          <p>Name:{props.name}</p>
          <p>Type:{props.type}</p>
          <p>Gender:{props.gender}</p>
          <p>Price:{props.price}&euro;</p>
          {props.showMessage ? (
            <p className="modal-added">
              {props.name} <br />
              has been <br />
              added to cart
            </p>
          ) : null}
        </div>
        <div className="modalButtons">
          <div className="modalCloseButton" onClick={props.toggle}>
            Close
          </div>
          <div className="modalAddToCartButton" onClick={props.addToCart}>
            Add to cart
          </div>
        </div>

        <div className="modalClose" onClick={props.toggle}>
          <FaTimes />
        </div>
      </div>
      <Backdrop onclick={props.toggle} />
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
