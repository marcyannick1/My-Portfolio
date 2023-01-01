import React, { Component } from "react";
import Card from "../components/Portfolio/Card";
import "../styles/Portfolio.scss";
import Nav from "../components/Nav";
import * as Fa from "react-icons/fa";
import * as Di from "react-icons/di";
import * as Si from "react-icons/si";

class Portfolio extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <>
                <Nav />
                <main id="portfolio">
                    <h2>Mon portfolio</h2>
                    <div className="container">
                        <Card
                            src="images/Portfolio/weather-app.jpg"
                            title="Weather App"
                            link="https://weather-app.infinityfreeapp.com"
                        >
                            <Fa.FaPhp/>
                            <Si.SiMysql/>
                            <Di.DiJqueryLogo/>
                            <Si.SiTailwindcss/>
                            <Si.SiChartdotjs/>
                        </Card>

                        <Card
                            src="images/Portfolio/EnglishDictionary.jpg"
                            title="English Dictionary"
                            link="https://marcyannick1.github.io/English-Dictionary/"
                        >
                            <Di.DiHtml5/>
                            <Di.DiCss3Full/>
                            <Si.SiJavascript size={'.8em'}/>
                        </Card>

                        <Card
                            src="images/Portfolio/RockPaperScisors.jpg"
                            title="Rock Paper Scisors"
                            link="https://marcyannick1.github.io/Rock-Paper-Scissors/"
                        >
                            <Di.DiHtml5/>
                            <Di.DiCss3Full/>
                            <Si.SiJavascript size={'.8em'}/>
                        </Card>

                        <Card
                            src="images/Portfolio/YelpCamp.jpg"
                            title="YelpCamp"
                            link="https://marcyannick1.github.io/YelpCamp-Codewell-Challenge/"
                        >
                            <Di.DiHtml5/>
                            <Di.DiCss3Full/>
                            <Fa.FaBootstrap/>
                        </Card>

                        <Card
                            src="images/Portfolio/Huddle.jpg"
                            title="Huddle Landing Page"
                            link="https://marcyannick1.github.io/Huddle-Landing-Page-FrontEndMentor-Challenge/"
                        >
                            <Di.DiHtml5/>
                            <Di.DiCss3Full/>
                        </Card>

                        <Card
                            src="images/Portfolio/ChatRoom.jpg"
                            title="ChatRoom"
                            link="https://spiritistic-flake.000webhostapp.com/"
                        >
                            <Fa.FaPhp/>
                            <Di.DiCss3Full/>
                            <Si.SiMysql/>
                        </Card>

                        <Card
                            src="images/Portfolio/Portfolio.jpg"
                            title="Mon Portfolio"
                        >
                            <Fa.FaReact/>
                            <Fa.FaSass/>
                            <Si.SiTailwindcss/>
                            <Si.SiLeaflet size={'.8em'}/>
                        </Card>
                    </div>
                </main>
            </>
        );
    }
}

export default Portfolio;
