import React from "react";

export default function Modal({ openModal, setOpenModal, children }) {
  return (
    <div className={`modal ${openModal ? "modal-open" : ""}`}>
      <div className="modal-box relative py-16 h-fit">
        <label
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2 "
          onClick={() => setOpenModal(false)}
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
}
