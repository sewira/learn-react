import React, { useRef } from 'react';

const Modal = ({ children, showModal, setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  console.log(modalRef);
  return (
    showModal && (
      <div className="Modal" ref={modalRef} onClick={closeModal}>
        <div className="container">{children}</div>
      </div>
    )
  );
};

export default Modal;
