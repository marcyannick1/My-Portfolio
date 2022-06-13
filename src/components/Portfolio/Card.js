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
                        <i class={"fa-brands fa-" + this.props.tech1}></i>
                        <i class={"fa-brands fa-" + this.props.tech2}></i>
                        <i class={"fa-brands fa-" + this.props.tech3}></i>
                        <i class={"fa-brands fa-" + this.props.tech4}></i>
                        <i class={"fa-brands fa-" + this.props.tech5}></i>
                        <i class={"fa-brands fa-" + this.props.tech6}></i>
                        <i class={"fa-brands fa-" + this.props.tech7}></i>
                    </div>
                    <a href={this.props.link} target="_blank" rel="noreferrer" className={"mouseover " + this.props.title}>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Card;
