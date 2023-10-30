import React from "react";
import DeleteButton from "./element/button/DeleteButton";
import ArchiveButton from "./element/button/ArchiveButton";
import { showFormattedDate } from "../utils";

const NoteListItem = ({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchive,
}) => {
  const buttonLabel = archived ? "Pindahkan" : "Archive";
  return (
    <>
      <div className="note-item">
        <div className="note-item__content">
          <h3 className="note-item__title">{title}</h3>
          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{body}</p>
        </div>
        <div className="note-item__action">
          <DeleteButton id={id} onDelete={onDelete} text="Delete" />
          <ArchiveButton id={id} onArchive={onArchive} archived={archived}>
            {buttonLabel}
          </ArchiveButton>
        </div>
      </div>
    </>
  );
};

export default NoteListItem;
