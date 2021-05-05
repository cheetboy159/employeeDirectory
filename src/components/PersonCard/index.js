import React from 'react';

function PersonCard(props) {

    const style = {
        display: 'flex',
        alignItems: 'center',
        margin: '2rem 3rem',
        padding: '2rem 3rem'
    }

    return (
        <div>
            <div className="row" >
                <div className="col-md-12" >
                    <div className="card" style={style}>
                        <img className="img-fluid" src={props.picture}></img>
                        <br></br>
                        <h5 className="name">{props.name}</h5>
                        <div className="gender">{props.gender}</div>
                        <div className="age">{props.age}</div>
                        <div className="phoneNumber">{props.phoneNumber}</div>
                        <div className="email">{props.email}</div>
                        <br></br>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>




    )
}

export default PersonCard
