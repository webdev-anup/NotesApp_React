import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ onSearch }) {
  return (
    <div className="search">
      <MdSearch size={20} />
      <input
        type="text"
        placeholder="Search Notes..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
