import React, { Component } from "react";
import Social from "../components/Home/Social";
import "../styles/Home.scss";
import Nav from "../components/Nav";

class Home extends Component {
    state = {
        top: 0,
        left: 0,
    };
    componentDidMount() {
        document.addEventListener("mousemove", this.position);
        window.scrollTo(0,0)
    }

    componentWillUnmount(){
        document.removeEventListener("mousemove", this.position);
    }

    position = (e) => {
        const stickers = document.querySelector('main#home img')
        this.setState({ top: e.clientY, left: e.clientX });
        stickers.style.right = (this.state.left / 60) + "px";
    };
    render() {
        return (
            <>
                <Nav/>
                <main id="home">
                    <div>
                        <h1>
                            <span>Bienvenue ! 👋</span>
                            <br />
                            Je suis Marc Yannick, étudiant en{" "}
                            <span className="mouseover">
                                <a
                                    href="https://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    BTS SIO SLAM
                                </a>
                            </span>
                        </h1>
                        <Social />
                    </div>
                    <div className="stickers">
                        <img
                            src="images/Stickers2.png"
                            alt="Bitmoji Stickers"
                        />
                    </div>
                </main>
            </>
        );
    }
}

export default Home;
