import PropType from "prop-types";
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
      <Link to={`/${id}`} style={{ textDecoration: "none", color: "black" }}>
        <button className="contact-item__delete" onClick={() => onDelete(id)}>
          Detail
        </button>
      </Link>
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

NoteItem.propType = {
  id: PropType.string.isRequired,
  title: PropType.string.isRequired,
  body: PropType.string.isRequired,
  createdAt: PropType.instanceOf(Date).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default NoteItem;
