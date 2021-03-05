import React from 'react'
import { Link } from 'react-router-dom'


function Failed(props){

    return(
        <div className="failed">
            <center>
                <div className="failed-msg">
                    Failed To Retrieve data please reload.
                    <Link to={"/"}> reload </Link>
                </div>
                
            </center>
        </div>
    )
}

export default Failed