import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ListPageWrapper from "./pages/ListPage";
import DetailPageWrapper from "./pages/DetailPage";
import AddNewPage from "./pages/AddNewPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Aplikasi Catatan</h1>
        <Link to="/notes/new" style={{ textDecoration: "none", color: "black" }}>
          <p>Tambah Catatan</p>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ListPageWrapper />} />
          <Route path="/notes/:id" element={<DetailPageWrapper />} />
          <Route path="/notes/new" element={<AddNewPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
