import React from "react";

const style = {
    display: 'flex',
    alignItems: 'center',
    margin: '2rem 3rem',
    padding: '2rem 3rem'
}

function People(props) {
    return (
        <>
            <div className="row" >
                {props.people.map(person => (
                    <div className="col-sm-12 col-md-2" >
                        <div className="card" style={style}>
                            <div id={person.id.value}>
                                <img alt={person.name} className="img-fluid" src={person.picture.large} />
                                <h3>{person.name.first} {person.name.last} </h3>
                                <div >{person.email}</div>
                                <h4>{person.location.state}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default People;