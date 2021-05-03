import React from "react";

function Table(props) {
    return (
        <div id="tableCloth">
            <table className="table">{props.children}</table>
        </div>
    )
}

export default Table;