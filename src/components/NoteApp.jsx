import React from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./element/header/NoteHeader";
import NoteArchive from "./NoteArchive";
import NoteInputBody from "./NoteInputBody";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      newNote: {
        id: +new Date(),
        title: "",
        body: "",
        archived: false,
        createdAt: new Date().toISOString(),
      },
      archivedNotes: [],
    };

    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
    this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onChangeTitleHandler(e) {
    this.setState({
      newNote: {
        ...this.state.newNote,
        title: e.target.value,
      },
    });
  }

  onChangeBodyHandler(e) {
    this.setState({
      newNote: {
        ...this.state.newNote,
        body: e.target.value,
      },
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();

    this.setState((prevState) => ({
      notes: [...prevState.notes, this.state.newNote],
      newNote: {
        id: +new Date(),
        title: "",
        body: "",
        archived: false,
        createdAt: new Date().toISOString(),
      },
    }));

    console.log(this.state.notes);
  }

  onDeleteHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
      archivedNotes: prevState.archivedNotes.filter((note) => note.id !== id),
    }));
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: !note.archived,
          };
        }
        return note;
      });

      const archivedNote = prevState.notes.find((note) => note.id === id);

      return {
        notes: updatedNotes,
        archivedNotes: archivedNote.archived
          ? [...prevState.archivedNotes, archivedNote]
          : prevState.archivedNotes.filter((note) => note.id !== id),
      };
    });
  }

  render() {
    return (
      <>
        <header className="note-app__header">
          <NoteHeader />
        </header>
        <div className="note-app__body">
          <NoteInputBody
            title={this.state.newNote.title}
            body={this.state.newNote.body}
            onChangeTitle={this.onChangeTitleHandler}
            onChangeBody={this.onChangeBodyHandler}
            onSubmit={this.onSubmitHandler}
          />
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <h2>Arsip</h2>
          <NoteArchive
            archivedNotes={this.state.archivedNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
