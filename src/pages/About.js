import React, { Component } from "react";
import "../styles/About.scss";
import Nav from "../components/Nav";
import Skills from "../components/About/Skills";
import { TextAnimate } from "../components/Home/TextAnimate";
import ContainerAnimate, {
    item,
} from "../components/Portfolio/ContainerAnimate";
import { motion } from "framer-motion";

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
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
            <>
                <Nav />
                <main id="about">
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
                            À propos
                        </TextAnimate>
                    </h2>
                    <div className="container">
                        <ContainerAnimate
                            delayChildren={0.3}
                            staggerChildren={0.1}
                            className="paragraph"
                        >
                            <motion.p variants={item}>
                                Je suis Coulibaly Hamed Marc Yannick âgé de 20
                                ans et actuellement en Bachelor Développeur
                                Full Stack & DevOps à l'IPSSI, je suis passionné par tout
                                ce qui est technologies web, graphisme... <br />
                                Je suis titulaire d'un BTS SIO SLAM & d'un BAC Pro en Electronique.
                            </motion.p>
                            <motion.p variants={item}>
                                Je me qualifie en tant que polyvalent, dans le
                                sens où j'aime toucher un peu à tout découvrir
                                de nouveaux univers de la technologies, motivé
                                car j'aime me fixer des objectifs et les
                                atteindre à tout prix.
                            </motion.p>
                            <motion.p variants={item}>
                                Je suis actuellement à la recherche d'un contrat
                                d'alternance pour la rentrée 2022-2023 dans le
                                but de terminer mes 2 années de BTS en ayant
                                découvert le monde professionnel, ce qui me
                                permettra d'acquérir aussi de l'expérience.
                            </motion.p>
                            <motion.a
                                href="CV.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="mouseover"
                                variants={item}
                            >
                                Voir mon CV
                            </motion.a>
                            <Skills />
                        </ContainerAnimate>
                        <motion.img
                            src="images/Stickers 2.png"
                            alt="Bitmoji Stickers"
                            className="stickers stickersSmiley mouseover"
                            onMouseEnter={stickersHidden}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        />
                        <img
                            src="images/Stickers 3.png"
                            alt="Bitmoji Stickers"
                            className="stickers stickersWinky mouseover hidden"
                            onMouseLeave={stickersVisible}
                        />
                    </div>
                </main>
            </>
        );
    }
}

export default About;
