import React, { Component } from "react";
import Social from "../components/Home/Social";
import "../styles/Home.scss";
import Nav from "../components/Nav";
import { TextAnimate } from "../components/Home/TextAnimate";
import { motion } from "framer-motion";

class Home extends Component {
    state = {
        top: 0,
        left: 0,
        stickers: Math.floor(Math.random() * 10 + 1),
        hide: true,
    };
    componentDidMount() {
        document.addEventListener("mousemove", this.position);
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        document.removeEventListener("mousemove", this.position);
    }

    position = (e) => {
        const stickers = document.querySelector("main#home img");
        this.setState({ top: e.clientY, left: e.clientX });
        stickers.style.right = this.state.left / 60 + "px";
    };
    render() {
        setTimeout(() => this.setState({ hide: false }), 300);

        return (
            <>
                <Nav />
                <main id="home">
                    <div>
                        {!this.state.hide && (
                            <>
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <h1>
                                        <TextAnimate
                                            initial={{ y: "100%" }}
                                            animate="visible"
                                            variants={{
                                                visible: (i) => ({
                                                    y: 0,
                                                    transition: {
                                                        delay: i * 0.3,
                                                    },
                                                }),
                                            }}
                                            ownStyle={{ fontSize: ".7em" }}
                                        >
                                            Bienvenue ! 👋
                                        </TextAnimate>
                                        <br />
                                        <TextAnimate
                                            initial={{ y: "100%" }}
                                            animate="visible"
                                            variants={{
                                                visible: (i) => ({
                                                    y: 0,
                                                    transition: {
                                                        delay: i * 0.1,
                                                    },
                                                }),
                                            }}
                                        >
                                            Je suis Marc Yannick, étudiant en
                                            <span style={{ color: "#0edabf" }}>
                                                BTS SIO SLAM
                                            </span>
                                        </TextAnimate>
                                    </h1>
                                </motion.div>
                                <Social />
                            </>
                        )}
                    </div>
                    <div className="stickers">
                        <motion.img
                            src={
                                "images/Home/Stickers" +
                                this.state.stickers +
                                ".png"
                            }
                            alt="Bitmoji Stickers"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        />
                    </div>
                </main>
            </>
        );
    }
}

export default Home;
