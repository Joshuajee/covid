import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './NavBar'

function Failed(props){

    return(
        <div className="failed">
            <center>
                <div className="failed-msg">
                    Failed To Retrieve data please reload
                </div>
                <Link to={""}> reload </Link>
            </center>
        </div>
    )
}

export default Failed