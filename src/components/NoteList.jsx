import React from "react";
import NoteListItem from "./NoteListItem";

const NoteList = ({ notes, archive, onDelete, onArchive, filteredNote }) => {
  // console.log(notes);
  const dataToDisplay = filteredNote.length > 0 ? filteredNote : notes;

  return (
    <>
      <div className="notes-list">
        {dataToDisplay.length === 0 ? (
          <p className="note-list__empty-message">Tidak ada Catatan</p>
        ) : (
          dataToDisplay.map((note) => (
            <NoteListItem
              key={note.id}
              id={note.id}
              archive={archive}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))
        )}
      </div>
    </>
  );
};

export default NoteList;
