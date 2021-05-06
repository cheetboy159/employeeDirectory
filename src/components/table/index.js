import React from "react";

function Table(props) {
    return (
        <>
        <div className="row">
            <div className="col-md">
                {props.children}
            </div>

        </div>
             
        </>
    )
}
export default Table;