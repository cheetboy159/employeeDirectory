import React from "react";


function Sort(props) {
    return (
        <>
            
                <div className="input-group-append">
                    <button className="btn btn-primary"
                        id="btn"
                        type="submit"
                        onClick={(event) => props.filter(document.querySelector("#search").value)}>search</button>
                        
                    
                </div>

                <button className="btn btn-primary" type="submit">Button</button>
          
        </>
    )
}
export default Sort;