import React from 'react';

function PersonCard(props) {

    const style = {
        alignItems: 'center',
        margin: '3rem 3rem',
        padding: '3rem'
    }

    return (


                <div className="col-4" >
                    <div className="card" style={style}>
                        <img className="img-fluid" alt={props.picture} src={props.picture}></img>
                        <br></br>
                        <h5 className="name">{props.name}</h5>
                        <div className="gender">{props.gender}</div>
                        <div className="age">{props.age}</div>
                        <div className="phoneNumber">{props.phoneNumber}</div>
                        <div className="email">{props.email}</div>
                        <br></br>
                    </div>
                </div>





    )
}

export default PersonCard
