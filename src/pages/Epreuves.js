import React, { Component } from "react";
import "../styles/About.scss";
import Nav from "../components/Nav";

class Epreuves extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <>
                <Nav />
                <main id="epreuves">
                    <h2>E4/E5</h2>
                </main>
            </>
        );
    }
}

export default Epreuves;