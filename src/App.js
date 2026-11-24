import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("my-notes-data");
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, text: "Complete Project", date: "24/11/2026" },
      { id: 2, text: "DSA Leetcode Problems Done", date: "24/11/2026" },
      { id: 3, text: "Update Portfolio", date: "24/11/2026" },
    ];
  });

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("my-notes-data", JSON.stringify(notes));
  }, [notes]);

  function handleDelete(id) {
    const remainingNotes = notes.filter((item) => item.id !== id);
    setNotes(remainingNotes);
  }

  function handleAdd(text) {
    const newNote = {
      id: Date.now(),
      text: text,
      date: new Date().toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  }

  function handleToggleMode() {
    setDarkMode(!darkMode);
  }

  const filteredNotes = notes.filter((item) =>
    item.text.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header onToggle={handleToggleMode} />
        <Search onSearch={setSearchText} />
        <div className="notes-grid">
          {filteredNotes.map((item) => (
            <Note
              key={item.id}
              id={item.id}
              text={item.text}
              date={item.date}
              onDelete={handleDelete}
            />
          ))}
          <AddNote onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
}

export default App;
