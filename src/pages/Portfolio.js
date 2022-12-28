import React, { Component } from "react";
import Card from "../components/Portfolio/Card";
import "../styles/Portfolio.scss";
import Nav from "../components/Nav";

class Portfolio extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <React.Fragment>
                <Nav />
                <main id="portfolio">
                    <h2>Mon portfolio</h2>
                    <div className="container">
                        <Card
                            src="images/Portfolio/weather-app.jpg"
                            title="Weather App"
                            link="https://weather-app.infinityfreeapp.com"
                            tech1="php"
                            tech2="css3-alt"
                            tech3="js"
                        />
                        <Card
                            src="images/Portfolio/EnglishDictionary.jpg"
                            title="English Dictionary"
                            link="https://marcyannick1.github.io/English-Dictionary/"
                            tech1="html5"
                            tech2="css3-alt"
                            tech3="js"
                        />
                        <Card
                            src="images/Portfolio/RockPaperScisors.jpg"
                            title="Rock Paper Scisors"
                            link="https://marcyannick1.github.io/Rock-Paper-Scissors/"
                            tech1="html5"
                            tech2="css3-alt"
                            tech3="js"
                        />
                        <Card
                            src="images/Portfolio/YelpCamp.jpg"
                            title="YelpCamp"
                            link="https://marcyannick1.github.io/YelpCamp-Codewell-Challenge/"
                            tech1="html5"
                            tech2="css3-alt"
                            tech3="bootstrap"
                        />
                        <Card
                            src="images/Portfolio/Huddle.jpg"
                            title="Huddle Landing Page"
                            link="https://marcyannick1.github.io/Huddle-Landing-Page-FrontEndMentor-Challenge/"
                            tech1="html5"
                            tech2="css3-alt"
                        />
                        <Card
                            src="images/Portfolio/ChatRoom.jpg"
                            title="ChatRoom"
                            link="https://spiritistic-flake.000webhostapp.com/"
                            tech1="php"
                            tech2="html5"
                            tech3="css3-alt"
                        />
                        <Card
                            src="images/Portfolio/Portfolio.jpg"
                            title="Mon Portfolio"
                            tech1="react"
                            tech2="html5"
                            tech3="sass"
                        />
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default Portfolio;
