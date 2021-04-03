import React from "react";

function Search({ searchText, setSearchText }) {
  return (
    <div className="search-input-wrapper">
      <span className="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 256 256"
        >
          <path fill="none" d="M0 0h256v256H0z" />
          <circle
            cx="116"
            cy="116"
            r="64"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="18"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="18"
            d="M175.394 175.4l48.6 48.601"
          />
        </svg>
      </span>
      <input
        className="search-input"
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default Search;
