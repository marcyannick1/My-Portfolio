import React from "react";
import { motion } from "framer-motion";

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
                    overflow: "auto",
                }}
                initial={{ y: "-45%", x: "-50%", opacity: 0 }}
                animate={{ y: "-50%", x: "-50%", opacity: 1 }}
            >
                <div>
                    <div
                        style={{
                            height: 180,
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
                    <div style={{ padding: 15 }}>
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
                        {link && <a href={link}>Voir le site</a>}
                        <div className="tech">{technos}</div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Modal;
