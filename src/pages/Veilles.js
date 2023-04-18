import React, { Component } from "react";
import "../styles/About.scss";
import Nav from "../components/Nav";

class Veilles extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <>
                <Nav />
                <main id="veilles">
                    <h2>Veilles Technologiques</h2>
                </main>
            </>
        );
    }
}

export default Veilles;