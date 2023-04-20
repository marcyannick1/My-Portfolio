import React, { Component } from "react";
import "../styles/About.scss";
import Nav from "../components/Nav";
import { TextAnimate } from "../components/Home/TextAnimate";

class Epreuves extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <Nav />
                <main id="epreuves">
                    <h2>
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
                            E4 / E5
                        </TextAnimate>
                    </h2>
                </main>
            </>
        );
    }
}

export default Epreuves;
