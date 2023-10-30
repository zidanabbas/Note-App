import React from "react";

const ArchiveButton = ({ id, onArchive, archived }) => {
  const buttonLabel = archived ? "Pindahkan" : "Archive";
  return (
    <>
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        {buttonLabel}
      </button>
    </>
  );
};

export default ArchiveButton;
