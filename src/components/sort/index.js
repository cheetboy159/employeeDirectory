import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


function Sort(props) {
    return (
        <>
            {/* <div className="input-group-append">
                <button className="btn btn-primary"
                    id="btn"
                    type="submit"
                    onClick={(event) => props.filter(document.querySelector("#search").value)}>search</button>
            </div>
            <button className="btn btn-primary" type="submit">Button</button> */}
            {/* 1. create a drop down menue using bootstrap
                2. make age an item, make last name an item, gender
                3. add an onclick function to each item
                4. creat sort function
            */}

            <DropdownButton id="dropdown-basic-button" title="Sort By">
                <Dropdown.Item onClick={props.sort}>Age</Dropdown.Item>
                <Dropdown.Item onClick={props.sort}>Last Name</Dropdown.Item>
                <Dropdown.Item onClick={props.sort}>Female</Dropdown.Item>
                <Dropdown.Item onClick={props.sort}>Male</Dropdown.Item>
            </DropdownButton>
        </>
    )
}
export default Sort;