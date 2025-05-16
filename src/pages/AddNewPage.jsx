import React from "react";
import { addNote } from "../utils/local-data";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

function AddNewPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <section>
      <h2>Tambah kontak</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddNewPage;
