import PropTypes from "prop-types";

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

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteDetail;
