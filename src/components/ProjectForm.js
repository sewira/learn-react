import React from 'react';

const ProjectForm = ({
  heading,
  handleSubmit,
  value,
  setValue,
  setShowModal,
  confirmButtonText,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>{heading}</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nama Project..."
        autoFocus
      />
      <button className="cancel" onClick={() => setShowModal(false)}>
        Cancel
      </button>
      <button className="confirm">{confirmButtonText}</button>
    </form>
  );
};

export default ProjectForm;
