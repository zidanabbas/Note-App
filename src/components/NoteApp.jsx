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
      searchTerm: "",
      filteredNote: [],
    };
    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
    this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(e) {
    const { notes } = this.state;
    const searchInput = e.target.value.toLowerCase();
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title.toLocaleLowerCase().includes(searchInput);
    });
    this.setState({
      searchTerm: searchInput,
      filteredNote: filteredNotes,
    });
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

      const archiveNote = updatedNotes.find((note) => note.id === id);

      if (archiveNote.archived) {
        if (!prevState.archivedNotes.some((note) => note.id === id)) {
          const updatedArchivedNotes = [
            ...prevState.archivedNotes,
            archiveNote,
          ];
          return {
            notes: updatedNotes,
            archivedNotes: updatedArchivedNotes,
          };
        }
      } else {
        const updatedArchivedNotes = prevState.archivedNotes.filter(
          (note) => note.id !== id
        );
        return {
          notes: updatedNotes,
          archivedNotes: updatedArchivedNotes,
        };
      }

      return {
        notes: updatedNotes,
        archivedNotes: prevState.archivedNotes,
      };
    });
  }

  render() {
    return (
      <>
        <header className="note-app__header">
          <NoteHeader
            onChange={this.handleSearchInput}
            value={this.state.searchTerm}
          />
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
            filteredNote={this.state.filteredNote}
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
