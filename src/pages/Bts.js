import React, { Component } from "react";
import "../styles/About.scss";
import Nav from "../components/Nav";

class Bts extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <>
                <Nav />
                <main id="bts">
                    <h2>BTS SIO</h2>
                </main>
            </>
        );
    }
}

export default Bts;