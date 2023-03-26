import React from "react";

function Modal({ handleClose, title, src }) {
    return (
        <>
            <div
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
            ></div>
            <div
                style={{
                    width: "85%",
                    maxWidth: 800,
                    height: 600,
                    background: "white",
                    position: "fixed",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10000,
                    borderRadius: 8,
                    overflow: "auto",
                }}
            >
                <div
                    style={{
                        height: 180,
                        // WebkitMaskBoxImage:
                        //     "linear-gradient(0deg,transparent,#141414 50%)",
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
                <div style={{ height: "150%", padding: 15 }}>
                    <h2 style={{fontSize : "1.5em" ,color: "#272727", padding: 0, position : "sticky", top: 0 }}>{title}</h2>
                </div>
            </div>
        </>
    );
}

export default Modal;
