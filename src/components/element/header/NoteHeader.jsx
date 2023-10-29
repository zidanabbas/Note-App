import React from "react";

const NoteHeader = ({ onChange }) => {
  return (
    <>
      <h1 className="note-input__title">Noted App</h1>
      <div className="note-search">
        <input type="text" onChange={onChange} placeholder="search..." />
      </div>
    </>
  );
};

export default NoteHeader;
