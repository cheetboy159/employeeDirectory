import React from "react";

function SearchBar() {
    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search by Name" aria-label="earch by Name" aria-describedby="button-addon2"/>
                <div className="input-group-append"> <button className="btn btn-outline-secondary" type="button" id="button-addon2"> Search </button> </div>
            </div>
        </>
    );
}
export default SearchBar;