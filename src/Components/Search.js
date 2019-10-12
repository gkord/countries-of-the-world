import React from 'react'

function Search(props) {
    return (
        <div className="search-container">
            <form action="">
                <input type="text" name="searchResult" value={props.searchResult} onChange={props.handleChange}/>
                <button type="submit" onClick={props.handleSubmit}>Search</button>
            </form>
        </div>
    )
}

export default Search;
