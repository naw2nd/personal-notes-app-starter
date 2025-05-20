import React from "react";
import NoteDetail from "../components/NoteDetail";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    const note = this.state.note;

    if (!note) {
      return <p>Catatan tidak ditemukan</p>;
    }

    return (
      <section>
        <h2>Detail Catatan</h2>
        <NoteDetail key={note.id} id={note.id} {...note} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
