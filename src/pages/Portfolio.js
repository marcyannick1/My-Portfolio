import React, { Component } from "react";
import Card from "../components/Portfolio/Card";
import "../styles/Portfolio.scss";
import Nav from "../components/Nav";
import { FaReact, FaPhp, FaBootstrap, FaSass } from "react-icons/fa";
import { DiJqueryLogo, DiHtml5, DiCss3Full } from "react-icons/di";
import {
    SiVite,
    SiTypescript,
    SiChakraui,
    SiMysql,
    SiTailwindcss,
    SiChartdotjs,
    SiLeaflet,
    SiJavascript,
    SiNextdotjs,
    SiPrisma
} from "react-icons/si";
import { BsStripe } from "react-icons/bs";
import * as ModalsContent from "../components/Portfolio/Modal contents/modalsContent";
import { TextAnimate } from "../components/Home/TextAnimate";
import ContainerAnimate from "../components/Portfolio/ContainerAnimate";

class Portfolio extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Nav />
                <main id="portfolio">
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
                            Mon Portfolio
                        </TextAnimate>
                    </h2>
                    <ContainerAnimate delayChildren={.4} staggerChildren={.2} className="container">
                        <Card
                            src="images/Portfolio/CryptoPay.png"
                            title="Crypto Pay"
                            description={ModalsContent.cryptoPay.description}
                            contributors={ModalsContent.cryptoPay.contributors}
                        >
                            <SiNextdotjs name="Next JS" />
                            <SiTypescript name="Typescript" size={".9em"} />
                            <SiChakraui name="Chakra UI" size={".9em"} />
                            <SiPrisma name="Prisma"/>
                            <SiChartdotjs name="Chart JS" />
                            <BsStripe name="Stripe" size={".9em"}/>
                        </Card>

                        <Card
                            src="images/Portfolio/Translation app dark.png"
                            title="Translation App"
                            githubLink="https://github.com/marcyannick1/Translation-App"
                            description={ModalsContent.translationApp.description}
                            contributors={ModalsContent.translationApp.contributors}
                        >
                            <FaReact name="React JS" />
                            <SiVite name="Vite JS" size={".9em"} />
                            <SiTypescript name="Typescript" size={".9em"} />
                            <SiChakraui name="Chakra UI" size={".9em"} />
                        </Card>

                        <Card
                            src="images/Portfolio/weather-app.jpg"
                            title="Weather App"
                            link="https://weather-app.infinityfreeapp.com"
                            githubLink="https://github.com/marcyannick1/Weather-App"
                            description={ModalsContent.weatherApp.description}
                            contributors={ModalsContent.weatherApp.contributors}
                        >
                            <SiMysql name="MySQL" />
                            <FaPhp name="PHP" />
                            <DiJqueryLogo name="Jquery" />
                            <SiTailwindcss name="TailwindCSS" />
                            <SiChartdotjs name="Chart JS" />
                        </Card>

                        <Card
                            src="images/Portfolio/Leboncoin.png"
                            title="Leboncoin Clone"
                            githubLink="https://github.com/marcyannick1/Leboncoin-Clone"
                            description={ModalsContent.leboncoin.description}
                            contributors={ModalsContent.leboncoin.contributors}
                        >
                            <FaPhp name="PHP" />
                            <SiMysql name="MySQL" />
                            <DiCss3Full name="CSS" />
                            <SiJavascript name="JavaScript" size={".8em"} />
                        </Card>

                        <Card
                            src="images/Portfolio/EnglishDictionary.jpg"
                            title="English Dictionary"
                            link="https://marcyannick1.github.io/English-Dictionary/"
                            githubLink="https://github.com/marcyannick1/English-Dictionary"
                            description={ModalsContent.englishDictionary.description}
                            contributors={ModalsContent.englishDictionary.contributors}
                        >
                            <DiHtml5 name="HTML" />
                            <DiCss3Full name="CSS" />
                            <SiJavascript name="JavaScript" size={".8em"} />
                        </Card>

                        <Card
                            src="images/Portfolio/RockPaperScisors.jpg"
                            title="Rock Paper Scisors"
                            link="https://marcyannick1.github.io/Rock-Paper-Scissors/"
                            githubLink="https://github.com/marcyannick1/Rock-Paper-Scissors"
                            description={ModalsContent.rockPaperScisors.description}
                            contributors={ModalsContent.rockPaperScisors.contributors}
                        >
                            <DiHtml5 name="HTML" />
                            <DiCss3Full name="CSS" />
                            <SiJavascript name="JavaScript" size={".8em"} />
                        </Card>

                        <Card
                            src="images/Portfolio/YelpCamp.jpg"
                            title="YelpCamp"
                            link="https://marcyannick1.github.io/YelpCamp-Codewell-Challenge/"
                            githubLink="https://github.com/marcyannick1/YelpCamp-Codewell-Challenge"
                            description={ModalsContent.yelpCamp.description}
                            contributors={ModalsContent.yelpCamp.contributors}
                        >
                            <DiHtml5 name="HTML" />
                            <DiCss3Full name="CSS" />
                            <FaBootstrap name="Bootstrap" />
                        </Card>

                        <Card
                            src="images/Portfolio/Huddle.jpg"
                            title="Huddle Landing Page"
                            link="https://marcyannick1.github.io/Huddle-Landing-Page-FrontEndMentor-Challenge/"
                            githubLink="https://github.com/marcyannick1/Huddle-Landing-Page-FrontEndMentor-Challenge"
                            description={ModalsContent.huddleLandingPage.description}
                            contributors={ModalsContent.huddleLandingPage.contributors}
                        >
                            <DiHtml5 name="HTML" />
                            <DiCss3Full name="CSS" />
                        </Card>

                        <Card
                            src="images/Portfolio/ChatRoom.jpg"
                            title="ChatRoom"
                            link="https://spiritistic-flake.000webhostapp.com/"
                            description={ModalsContent.chatroom.description}
                            contributors={ModalsContent.chatroom.contributors}
                        >
                            <FaPhp name="PHP" />
                            <DiCss3Full name="CSS" />
                            <SiMysql name="MySQL" />
                        </Card>

                        <Card
                            src="images/Portfolio/Portfolio.jpg"
                            title="Mon Portfolio"
                            githubLink="https://github.com/marcyannick1/My-Portfolio"
                            description={ModalsContent.monPortfolio.description}
                            contributors={ModalsContent.monPortfolio.contributors}
                        >
                            <FaReact name="React JS" />
                            <FaSass name="SCSS" />
                            <SiTailwindcss name="TailwindCSS" />
                            <SiLeaflet name="Leaflet JS" size={".8em"} />
                        </Card>
                    </ContainerAnimate>
                </main>
            </>
        );
    }
}

export default Portfolio;
