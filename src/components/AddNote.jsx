import React, { useState } from "react";

function AddNote({ onAdd }) {
  const [text, setText] = useState("");
  const maxChars = 500;

  function handleChange(e) {
    if (e.target.value.length <= maxChars) {
      setText(e.target.value);
    }
  }

  function handleSave() {
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  }

  return (
    <div className="note add-note">
      <textarea
        rows="6"
        placeholder="Add a new note..."
        value={text}
        onChange={handleChange}
      />
      <div className="note-footer">
        <small>{maxChars - text.length} characters remaining</small>
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
