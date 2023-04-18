import React from "react";
import { motion } from "framer-motion";
import "../../styles/Modal.scss";

function Modal({ handleClose, title, src, link, technos }) {
    return (
        <>
            <motion.div
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    zIndex: "10000",
                    backgroundColor: "black",
                    opacity: ".5",
                    top: "0",
                    left: "0",
                }}
                onClick={handleClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.2 }}
            ></motion.div>

            <motion.div
                style={{
                    width: "85%",
                    maxWidth: 800,
                    height: 600,
                    background: "white",
                    position: "fixed",
                    left: "50%",
                    top: "50%",
                    zIndex: 10000,
                    borderRadius: 8,
                    // overflow: "auto",
                }}
                initial={{ y: "-45%", x: "-50%", opacity: 0 }}
                animate={{ y: "-50%", x: "-50%", opacity: 1 }}
            >
                <div>
                    <div
                        style={{
                            height: 250,
                        }}
                    >
                        <img
                            src={src}
                            alt="#"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        ></img>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "20px 35px",
                            gap: 20,
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    fontSize: "1.5em",
                                    color: "#272727",
                                    padding: 0,
                                    position: "sticky",
                                    top: 0,
                                }}
                            >
                                {title}
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin nisi dui, fermentum vel
                                lectus at, facilisis porta leo. Vivamus auctor
                                odio ac sollicitudin ullamcorper. Aliquam a
                                purus nec diam commodo ornare. Mauris
                                sollicitudin sapien augue, sed volutpat massa
                                placerat ut. Sed pharetra sodales leo eu ornare.
                                Etiam enim justo, lobortis ac turpis non,
                                aliquet varius turpis. <br />
                                Proin sed ante tincidunt, tincidunt leo
                                volutpat, blandit risus. Phasellus porttitor
                                fringilla purus non vestibulum. Mauris fermentum
                                eleifend felis a pulvinar.
                            </p>
                        </div>
                        <div
                            style={{ display: "flex", flexDirection: "column", gap : 10 }}
                        >
                            <div>
                                <span>Contributeurs:</span>
                                <p style={{width: "max-content",color :"#d6d6dd"}}>Marc Yannick Coulibaly</p>
                                <p style={{width: "max-content",color :"#d6d6dd"}}>Rufus Mouakassa</p>
                                <p style={{width: "max-content",color :"#d6d6dd"}}>Galdy Diazinga</p>
                            </div>
                            <div className="modal-tech">
                                <span>Technologies:</span>
                                <div>{technos}</div>
                            </div>
                            {link && (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mouseover"
                                >
                                    Voir le site
                                </a>
                            )}
                            <i class="fa-solid fa-up-right"></i>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Modal;
