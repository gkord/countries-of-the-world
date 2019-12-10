import React from "react";

const Modal = ({closeModal, children}) => {
  return (
    <div>
      <div className="modal-container">
        <div className="modal-header">
          <span className="close-modal-button" onClick={closeModal}>
            ×
          </span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
