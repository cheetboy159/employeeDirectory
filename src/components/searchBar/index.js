import React from "react";

const style = {
    display: 'flex',
    alignItems: 'center'
}
function SearchBar(props) {
    return (
        <>
            <div className="input-group mb-3">
                <input style={style}
                    id="search"
                    type="text"
                    className="form-control"
                    placeholder="search name"
                    aria-label="search name" />
                <div className="input-group-append">
                    <button class="btn btn-outline-secondary"
                        id="button-addon2"
                        type="submit"
                        onClick={(event) => props.filter(document.querySelector("#search").value)}>search</button>
                </div>
            </div>
        </>
    )
}
export default SearchBar;