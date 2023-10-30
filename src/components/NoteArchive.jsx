import React from "react";
import NoteListItem from "./NoteListItem";

const NoteArchive = ({ archivedNotes, onDelete, onArchive }) => {
  return (
    <div className="notes-list">
      {archivedNotes.length === 0 ? (
        <p className="note-list__empty-message">Tidak ada Catatan</p>
      ) : (
        archivedNotes.map((note) => (
          <NoteListItem
            key={note.id}
            date={note.createdAt}
            onDelete={onDelete}
            archived={note.archived}
            onArchive={onArchive}
            {...note}
          />
        ))
      )}
    </div>
  );
};

export default NoteArchive;
