import React from "react";
import "../scss/Home.scss";
import NoteCard from "./NavBar";

const Home = () => {
  const notes = [
    { id: 1, title: "React Hooks", content: "Learn useState, useEffect..." },
    { id: 2, title: "SCSS Tips", content: "Nesting, mixins, variables..." },
    { id: 3, title: "Project Ideas", content: "Notes app, portfolio..." },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__content">
          <h1>Welcome to <span>NoteFlow</span></h1>
          <p>Organize your thoughts, ideas, and to-dos in one place.</p>
          <button className="hero__btn">Create New Note</button>
        </div>
      </section>

      <section className="notes-preview">
        <h2>Recent Notes</h2>
        <div className="notes-grid">
          {notes.map(note => (
            <NoteCard key={note.id} title={note.title} content={note.content} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
