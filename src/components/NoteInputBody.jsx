import React from "react";
import NoteItemInput from "./NoteItemInput";

const NoteInputBody = ({
  title,
  body,
  onSubmit,
  onChangeTitle,
  onChangeBody,
}) => {
  return (
    <>
      <form action="" className="note-input" onSubmit={onSubmit}>
        <h2>Buat Catatan</h2>
        <NoteItemInput
          title={title}
          body={body}
          onChangeTitle={onChangeTitle}
          onChangeBody={onChangeBody}
          onSubmit={onSubmit}
        />
      </form>
    </>
  );
};

export default NoteInputBody;
