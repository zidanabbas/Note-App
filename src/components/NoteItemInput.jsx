import React from "react";

const NoteItemInput = ({ title, body, onChangeTitle, onChangeBody }) => {
  return (
    <>
      <input
        type="text"
        name="title"
        id="title"
        className="note-input__title"
        placeholder="tuliskan title disini..."
        value={title}
        onChange={onChangeTitle}
      />
      <textarea
        name="textBody"
        id="textBody"
        cols="30"
        rows="10"
        className="note-input__body"
        placeholder="Tuliskan catatanmu disini..."
        value={body}
        onChange={onChangeBody}
      ></textarea>
      <button type="submit">Buat</button>
    </>
  );
};

export default NoteItemInput;
