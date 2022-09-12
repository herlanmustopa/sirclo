import React from "react";

import "../styles/style.css";
import CardImage from "./CardImage";

const Modal = ({
  handleClose,
  show,
  children,
  front_default,
  name,
  height,
  weight,
  abilities,
  type,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <>
        <section className="modal-main">
          {children}
          <h4>Nama: {name}</h4>
          <h4>Weight: {weight}</h4>
          <h4>Height: {height}</h4>
          <h4>Ability: {abilities + ""}</h4>
          <h4>Type: {type + ""}</h4>
          <CardImage front_default={front_default} />
          <button className="btn" type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </>
    </div>
  );
};

export default Modal;
