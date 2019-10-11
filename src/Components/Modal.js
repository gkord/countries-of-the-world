import React from "react";

const Modal = ({closeModal}) => {
  return (
    <div>
      <div className="modal-container">
        <div className="modal-header">
          <span className="close-modal-button" onClick={closeModal}>
            ×
          </span>
        </div>
        <div className="modal-body">
            <h2>Country Data Goes Here</h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
