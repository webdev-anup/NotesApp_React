import React from "react";

function Header({ onToggle }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="save-btn" onClick={onToggle}>
        Toggle Mode
      </button>
    </div>
  );
}

export default Header;
