import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

function NoteItem({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="note-item">
      <h2>{title}</h2>
      <p>
        <em>Dibuat pada: {createdAt}</em>
      </p>
      <p>{body}</p>
      <Link to={`/notes/${id}`} style={{ textDecoration: "none", color: "black" }}>
        <button>
          Detail
        </button>
      </Link>
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default NoteItem;
