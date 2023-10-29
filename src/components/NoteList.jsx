import React from "react";
import NoteListItem from "./NoteListItem";

const NoteList = ({ notes, archive, onDelete, onArchive }) => {
  // console.log(notes);
  if (notes.length === 0) {
    return (
      <div className="notes-list">
        <p className="note-list__empty-message">Tidak ada Catatan</p>
      </div>
    );
  }
  return (
    <>
      <div className="notes-list">
        {notes.map((note) => (
          <NoteListItem
            key={note.id}
            id={note.id}
            archive={archive}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
      </div>
    </>
  );
};

export default NoteList;
