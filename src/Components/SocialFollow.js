import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

import './SocialFollow.css'
const SocialFollow = () => {
    return (
    <div class="social-container">
        <a href="https://www.linkedin.com/in/han-zhang-2sk34/" className="LinkedIn Social" size="2x">
            <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a href="https://github.com/hanzhang24" className="Github Social" size="2x">
            <FontAwesomeIcon icon={faGithub}/>
        </a>
    </div>
    )
}

export default SocialFollow