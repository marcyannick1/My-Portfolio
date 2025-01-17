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
                                Bienvenue sur mon portfolio !<br/><br/>
                                Je m'appelle Yannick Coulibaly, et je suis etudiant & développeur web passionné basé à Paris.
                            </motion.p>
                            <motion.p variants={item}>
                                Fort d’une formation en BTS SIO SLAM & Bachelor Dev Full Stack et DevOps, j’ai développé des compétences solides en React, React Native, Node Js, PHP et bien d'autres. Ces connaissances me permettent de transformer vos idées en applications web dynamiques, intuitives et esthétiques.
                            </motion.p>
                            <motion.p variants={item}>
                                Quand je ne suis pas devant mon écran, vous me trouverez probablement devant ma console de jeu ou à écouter de la musique. Ces moments m’inspirent et nourrissent ma créativité.<br/><br/>

                                N’hésitez pas à parcourir mon portfolio pour découvrir mes projets, et si mon profil vous intéresse, je serais ravi de discuter avec vous !


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
