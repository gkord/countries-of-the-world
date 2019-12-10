import React from "react";

function Search({ searchResult, handleChange, handleSubmit }) {
  return (
    <div className="search-container">
      <form action="">
        <label htmlFor="searchResult" className="visuallyHidden"></label>
        <input
          className="form-control mr-sm-2"
          type="text"
          name="searchResult"
          id="searchResult"
          value={searchResult}
          onChange={handleChange}
          placeholder="Enter region in here"
        />
        <label htmlFor="submit" className="visuallyHidden"></label>
        <button
          className="btn btn-primary btn-sm"
          type="submit"
          onClick={handleSubmit}
          id="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
