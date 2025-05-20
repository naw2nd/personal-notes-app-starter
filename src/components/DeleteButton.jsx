import PropType from "prop-types";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

DeleteButton.propType = {
  id: PropType.string.isRequired,
  onDelete: PropType.func.isRequired,
};

export default DeleteButton;
