import React from "react";

const style = {
    backgroundColor: '#7596AC',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    padding: '2rem 3rem'
}
function Header() {
    return (
        <header style={style}>
            <h1 id="top">EMPLOYEE DIRECTORY</h1>
        </header>
    )
}
export default Header;