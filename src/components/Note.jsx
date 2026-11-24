import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Note(props) {
  const { id, text, date, onDelete } = props;

  return (
    <div className="note">
      <p>{text}</p>
      <div className="note-footer">
        <small>{date}</small>
        <button className="delete-btn" onClick={() => onDelete(id)}>
          <MdDeleteForever size={22} />
        </button>
      </div>
    </div>
  );
}

export default Note;
