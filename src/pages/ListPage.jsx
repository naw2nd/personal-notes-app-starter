import React from "react";
import NoteList from "../components/NoteList";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { getAllNotes, deleteNote } from "../utils/local-data";
import SearchBar from "../components/SearchBar";

function ListPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ListPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section>
        <h2>Daftar Catatan</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        {notes.length === 0 ? (
          <p>Tidak ada catatan</p>
        ) : (
          <NoteList notes={notes} onDelete={this.onDeleteHandler} />
        )}
      </section>
    );
  }
}

ListPage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired
};

export default ListPageWrapper;
