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
          <div className="modal-inline">
            <div>
              <h4>Nama: {name}</h4>
              <h4>Weight: {weight}</h4>
              <h4>Height: {height}</h4>
              <h4>Ability: {abilities + ""}</h4>
              <h4>Type: {type + ""}</h4>
            </div>
            <div>
              <CardImage front_default={front_default} />
            </div>
          </div>

          <button className="btn" type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </>
    </div>
  );
};

export default Modal;
