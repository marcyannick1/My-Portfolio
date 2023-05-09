import React, { Component } from "react";
import "../styles/About.scss";
import Nav from "../components/Nav";
import { TextAnimate } from "../components/Home/TextAnimate";
import ContainerAnimate, {
    item,
} from "../components/Portfolio/ContainerAnimate";
import { motion } from "framer-motion";

class Veilles extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <Nav />
                <main id="veilles">
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
                            Veilles Techno & Juridique
                        </TextAnimate>
                    </h2>
                    <div>
                        <ContainerAnimate
                            delayChildren={0.3}
                            staggerChildren={0.1}
                        >
                            <motion.h2
                                variants={item}
                                style={{ fontSize: "1.4em", padding: "10px 0" }}
                            >
                                Sujet de mes veilles
                            </motion.h2>
                            <motion.p
                                variants={item}
                                style={{ fontSize: "1.2em", paddingBottom: 10, maxWidth : 900 }}
                            >
                                Les avancées technologiques ont un impact
                                considérable sur notre quotidien et notre
                                environnement professionnel, et il est important
                                de suivre l'évolution de certains domaines clés.
                                Pour cela, ma veille porte sur trois sujets qui
                                sont particulièrement importants :
                                l'intelligence artificielle (IA), les moteurs de
                                recherche et le Règlement Général sur la
                                Protection des Données (RGPD). La veille
                                technologique sur l'IA et les moteurs de
                                recherche permet de comprendre comment ces
                                outils peuvent être utilisés pour résoudre des
                                problèmes complexes et améliorer la visibilité
                                d'un site web. La veille juridique sur le RGPD,
                                quant à elle, est essentielle pour les
                                entreprises qui collectent et traitent des
                                données personnelles, afin de se conformer à la
                                réglementation en vigueur et éviter toute
                                sanction.
                            </motion.p>
                            <motion.h2
                                variants={item}
                                style={{ fontSize: "1.4em", padding: "10px 0" }}
                            >
                                Outils de suivi d'informations
                            </motion.h2>
                            <motion.p
                                variants={item}
                                style={{ fontSize: "1.2em", paddingBottom: 10 }}
                            >
                                - Google Actualités <br />
                                - Feedly <br />
                                - Pearltrees <br />
                                - Twitter <br />
                                - Youtube <br />
                            </motion.p>
                            <motion.h2
                                variants={item}
                                style={{ fontSize: "1.4em", padding: "10px 0" }}
                            >
                                Collections Pearltrees
                            </motion.h2>
                            <motion.div variants={item} style={{ display: "flex", gap : 20, flexWrap : "wrap" }}>
                                <div>
                                    <iframe
                                        title="rgpd"
                                        src="https://www.pearltrees.com/marcyannik/veille-juridique-rgpd/id61401913?embed=2&d=202305041315"
                                        width="350"
                                        height="300"
                                        style={{ border: "0px" }}
                                        allowtransparency="true"
                                    ></iframe>
                                    <span
                                        style={{
                                            display: "block",
                                            paddingTop: "2px",
                                            color: "#818181",
                                            fontSize: "13px",
                                        }}
                                    >
                                        <a
                                            rel="noreferrer"
                                            href="https://www.pearltrees.com/marcyannik/veille-juridique-rgpd/id61401913"
                                            style={{
                                                color: "#818181",
                                                fontSize: "13px",
                                            }}
                                            target="_blank"
                                        >
                                            Veille Juridique RGPD
                                        </a>
                                        , par{" "}
                                        <a
                                            rel="noreferrer"
                                            href="https://www.pearltrees.com/marcyannik"
                                            style={{
                                                color: "#818181",
                                                fontSize: "13px",
                                            }}
                                            target="_blank"
                                        >
                                            marcyannik
                                        </a>
                                    </span>
                                </div>

                                <div>
                                    <iframe
                                        title="ia"
                                        src="https://www.pearltrees.com/marcyannik/veille-techno-ia/id60748594?embed=2&d=202305041414"
                                        width="350"
                                        height="300"
                                        style={{ border: "0px" }}
                                        allowtransparency="true"
                                    ></iframe>
                                    <span
                                        style={{
                                            display: "block",
                                            paddingTop: "2px",
                                            color: "#818181",
                                            fontSize: "13px",
                                        }}
                                    >
                                        <a
                                            rel="noreferrer"
                                            href="https://www.pearltrees.com/marcyannik/veille-techno-ia/id60748594"
                                            style={{
                                                color: "#818181",
                                                fontSize: "13px",
                                            }}
                                            target="_blank"
                                        >
                                            Veille Techno IA
                                        </a>
                                        , par{" "}
                                        <a
                                            rel="noreferrer"
                                            href="https://www.pearltrees.com/marcyannik"
                                            style={{
                                                color: "#818181",
                                                fontSize: "13px",
                                            }}
                                            target="_blank"
                                        >
                                            marcyannik
                                        </a>
                                    </span>
                                </div>
                                <div>
                                    <iframe
                                        title="moteurs de recherches"
                                        src="https://www.pearltrees.com/marcyannik/moteurs-de-recherche/id61401993?embed=2&d=202305092346"
                                        width="350"
                                        height="300"
                                        style={{ border: "0px" }}
                                        allowtransparency="true"
                                    ></iframe>
                                    <span
                                        style={{
                                            display: "block",
                                            paddingTop: "2px",
                                            color: "#818181",
                                            fontSize: "13px",
                                        }}
                                    >
                                        <a
                                            rel="noreferrer"
                                            href="https://www.pearltrees.com/marcyannik/moteurs-de-recherche/id61401993"
                                            style={{
                                                color: "#818181",
                                                fontSize: "13px",
                                            }}
                                            target="_blank"
                                        >
                                            Veille Techno IA
                                        </a>
                                        , par{" "}
                                        <a
                                            rel="noreferrer"
                                            href="https://www.pearltrees.com/marcyannik"
                                            style={{
                                                color: "#818181",
                                                fontSize: "13px",
                                            }}
                                            target="_blank"
                                        >
                                            marcyannik
                                        </a>
                                    </span>
                                </div>
                            </motion.div>
                        </ContainerAnimate>
                    </div>
                </main>
            </>
        );
    }
}

export default Veilles;
