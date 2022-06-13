import React from "react";
import "../../styles/Social.scss"

function Social() {
    return (
        <div className="social">
            <a
                className="mouseover"
                href="https://github.com/marcyannick1"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-github-square"></i>
            </a>
            <a
                className="mouseover"
                href="https://www.linkedin.com/in/yannick-coulibaly-969168237/"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
                className="mouseover"
                href="https://twitter.com/marcyannik"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-twitter-square"></i>
            </a>
        </div>
    );
}

export default Social;
