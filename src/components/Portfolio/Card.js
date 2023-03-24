import React, { Component } from "react";
import "../../styles/Card.scss";
import Modal from "./Modal";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    handleClick = () => {
        this.setState({ isOpen: true });
    };

    handleClose = () => {
        this.setState({ isOpen: false });
    };

    render() {
        const icons = this.props.children.map((icon) => (
            <div>
                <span>{icon.props.name}</span>
                {icon}
            </div>
        ));

        return (
            <>
                {this.state.isOpen 
                && 
                <Modal handleClose = {this.handleClose}/>}
                <div className="card shadow-lg">
                    <div className="imgContainer mouseover" onClick={this.handleClick}>
                        <div className="title">
                            <h3>{this.props.title}</h3>
                        </div>
                        <img src={this.props.src} alt="img" />
                    </div>
                    <div className="iconContainer">
                        <div className="tech">{icons}</div>
                        {this.props.link && (
                            <a
                                href={this.props.link}
                                target="_blank"
                                rel="noreferrer"
                                className="mouseover"
                                id={this.props.title
                                    .toLowerCase()
                                    .replaceAll(" ", "-")}
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        )}
                    </div>
                </div>
                {/* {isOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={this.handleClose}>
                                &times;
                            </span>
                            <p>{this.props.title}</p>
                        </div>
                    </div>
                )} */}
            </>
        );
    }
}

export default Card;
