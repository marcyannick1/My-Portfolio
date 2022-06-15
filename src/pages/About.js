import React, { Component } from "react";
import "../styles/About.scss";
import Nav from "../components/Nav";

class About extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        function stickersHidden() {
            const stickerSmile = document.querySelector(".stickersSmiley");
            const stickerWink = document.querySelector(".stickersWinky");
            stickerSmile.classList.add("hidden");
            stickerWink.classList.remove("hidden");
        }
        function stickersVisible() {
            const stickerSmile = document.querySelector(".stickersSmiley");
            const stickerWink = document.querySelector(".stickersWinky");
            stickerSmile.classList.remove("hidden");
            stickerWink.classList.add("hidden");
        }
        return (
            <React.Fragment>
                <Nav />
                <main id="about">
                    <h2>A propos</h2>
                    <div className="container">
                        <div className="paragraph">
                            <p>
                                Je suis Coulibaly Hamed Marc Yannick âgé de 19
                                ans et actuellement en BTS SIO SLAM, je suis
                                passionné par tout ce qui est technologies web,
                                graphisme... <br />
                                Après l'obtention de mon BTS j'envisage de
                                poursuivre mes études en Licence pro mention
                                métiers de l'informatique : applications web.
                            </p>
                            <p>
                                Je me qualifie en tant que polyvalent, dans le
                                sens où j'aime toucher un peu à tout découvrir
                                de nouveaux univers de la technologies, motivé
                                car j'aime me fixer des objectifs et les
                                atteindre à tout prix.
                            </p>
                            <p>
                                Je suis actuellement à la recherche d'un contrat
                                d'alternance pour la rentrée 2022-2023 dans le
                                but de terminer mes 2 années de BTS en ayant
                                découvert le monde professionnel, ce qui me
                                permettra d'acquérir aussi de l'expérience.
                            </p>
                            <a
                                href="CV.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="mouseover"
                            >
                                Voir mon CV
                            </a>
                        </div>
                        <img src="images/Stickers 2.png" alt="Bitmoji Stickers" className="stickers stickersSmiley mouseover" onMouseEnter={stickersHidden}/>
                        <img src="images/Stickers 3.png" alt="Bitmoji Stickers" className="stickers stickersWinky mouseover hidden" onMouseLeave={stickersVisible}/>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default About;
