import React, { Component } from "react";
import Card from "../components/Portfolio/Card";
import "../styles/Portfolio.scss";
import Nav from "../components/Nav";
import * as Fa from "react-icons/fa";
import * as Di from "react-icons/di";
import * as Si from "react-icons/si";
import * as Tb from "react-icons/tb";

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
                            <Fa.FaPhp color="#d6d6d6"/>
                            <Si.SiMysql color="#d6d6d6"/>
                            <Di.DiJqueryLogo color="#d6d6d6"/>
                            <Si.SiTailwindcss color="#d6d6d6"/>
                        </Card>

                        <Card
                            src="images/Portfolio/EnglishDictionary.jpg"
                            title="English Dictionary"
                            link="https://marcyannick1.github.io/English-Dictionary/"
                        >
                            <Tb.TbBrandHtml5 color="#d6d6d6"/>
                            <Tb.TbBrandCss3 color="#d6d6d6"/>
                            <Tb.TbBrandJavascript color="#d6d6d6"/>
                        </Card>

                        <Card
                            src="images/Portfolio/RockPaperScisors.jpg"
                            title="Rock Paper Scisors"
                            link="https://marcyannick1.github.io/Rock-Paper-Scissors/"
                        >
                            <Tb.TbBrandHtml5 color="#d6d6d6"/>
                            <Tb.TbBrandCss3 color="#d6d6d6"/>
                            <Tb.TbBrandJavascript color="#d6d6d6"/>
                        </Card>

                        <Card
                            src="images/Portfolio/YelpCamp.jpg"
                            title="YelpCamp"
                            link="https://marcyannick1.github.io/YelpCamp-Codewell-Challenge/"
                        >
                            <Tb.TbBrandHtml5 color="#d6d6d6"/>
                            <Tb.TbBrandCss3 color="#d6d6d6"/>
                            <Fa.FaBootstrap color="#d6d6d6"/>
                        </Card>

                        <Card
                            src="images/Portfolio/Huddle.jpg"
                            title="Huddle Landing Page"
                            link="https://marcyannick1.github.io/Huddle-Landing-Page-FrontEndMentor-Challenge/"
                        >
                            <Tb.TbBrandHtml5 color="#d6d6d6"/>
                            <Tb.TbBrandCss3 color="#d6d6d6"/>
                        </Card>

                        <Card
                            src="images/Portfolio/ChatRoom.jpg"
                            title="ChatRoom"
                            link="https://spiritistic-flake.000webhostapp.com/"
                        >
                            <Fa.FaPhp color="#d6d6d6"/>
                            <Tb.TbBrandCss3 color="#d6d6d6"/>
                            <Si.SiMysql color="#d6d6d6"/>
                        </Card>

                        <Card
                            src="images/Portfolio/Portfolio.jpg"
                            title="Mon Portfolio"
                        >
                            <Fa.FaReact color="#d6d6d6"/>
                            <Fa.FaSass color="#d6d6d6"/>
                            <Si.SiTailwindcss color="#d6d6d6"/>
                        </Card>
                    </div>
                </main>
            </>
        );
    }
}

export default Portfolio;
