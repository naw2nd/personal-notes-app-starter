import React from "react";
import PropType from "prop-types";

function NoteDetail({ id, title, body, createdAt, archived }) {
  return (
    <div className="note-item">
      <h2>{title}</h2>
      <p>
        <em>Dibuat pada: {createdAt}</em>
      </p>
      <p>{body}</p>
      <p>
        Status: <strong>{archived ? "Diarsipkan" : "Aktif"}</strong>
      </p>
    </div>
  );
}

NoteDetail.propType = {
  id: PropType.string.isRequired,
  title: PropType.string.isRequired,
  body: PropType.string.isRequired,
  createdAt: PropType.instanceOf(Date).isRequired,
  archived: PropType.bool.isRequired,
};

export default NoteDetail;
