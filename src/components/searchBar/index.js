import React from "react";

function SearchBar(props) {
    return (
        <form>
            <input type="text" id="nameFilter" placeholder="search name" name="nameSearch" />
            <button type="submit" onClick={(event) => props.filterByName(event)}>search</button>
        </form>
    )
}

export default SearchBar;