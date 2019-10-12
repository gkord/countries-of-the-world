import React from "react";

const Modal = (props) => {
  return (
    <div>
      <div className="modal-container">
        <div className="modal-header">
          <span className="close-modal-button" onClick={props.closeModal}>
            ×
          </span>
        </div>
        <div className="modal-body">
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
