import React from "react";
import "./style.css"

function Table(props) {
    return (
        <>
        <div className="row background" >
                {props.children}
        </div>
             
        </>
    )
}
export default Table;