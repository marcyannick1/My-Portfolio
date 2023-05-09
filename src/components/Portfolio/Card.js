import React, { Component } from "react";
import "../../styles/Card.scss";
import Modal from "./Modal";
import { motion } from "framer-motion";

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

        const item = {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
            },
        };

        return (
            <>
                {this.state.isOpen && (
                    <Modal
                        handleClose={this.handleClose}
                        title={this.props.title}
                        src={this.props.src}
                        link={this.props.link}
                        githubLink={this.props.githubLink}
                        technos={icons}
                        description={this.props.description}
                        contributors={this.props.contributors}
                    />
                )}
                <motion.div className="card shadow-lg" variants={item}>
                    <div
                        className="imgContainer mouseover"
                        onClick={this.handleClick}
                    >
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
                </motion.div>
            </>
        );
    }
}

export default Card;
