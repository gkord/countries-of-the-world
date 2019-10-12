import React from "react";

function Search(props) {
  return (
    <div className="search-container">
      <form action="">
        <label htmlFor="searchResult" className="visuallyHidden"></label>
        <input
          type="text"
          name="searchResult"
          id="searchResult"
          value={props.searchResult}
          onChange={props.handleChange}
          placeholder="Enter region in here"
        />
        <label htmlFor="submit" className="visuallyHidden"></label>
        <button type="submit" onClick={props.handleSubmit} id="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;

