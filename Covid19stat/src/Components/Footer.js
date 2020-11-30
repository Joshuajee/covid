import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons"


   

function Footer(props){

    return(
        <div className="footer">
          
            <a className="socials" href="https://www.twitter.com/evuetaphajoshua">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a  className="socials" href="https://www.github.com/joshuajee">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    )
}

export default Footer