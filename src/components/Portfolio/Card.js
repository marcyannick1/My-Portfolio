import React, { Component } from "react";
import "../../styles/Card.scss";

class Card extends Component {
    render() {
        return (
            <div className="card shadow-md">
                <div className="imgContainer mouseover">
                    <div className="title">
                        <h3>{this.props.title}</h3>
                    </div>
                    <img src={this.props.src} alt="img" />
                </div>
                <div className="iconContainer">
                    <div className="tech">
                        {this.props.children}
                    </div>
                    <a href={this.props.link} target="_blank" rel="noreferrer" className="mouseover" id={this.props.title.toLowerCase().replaceAll(" ","-")}>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Card;
