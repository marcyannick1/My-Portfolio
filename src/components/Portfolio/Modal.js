import React from "react";

function Modal({ handleClose, title }) {
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
                    maxWidth: 900,
                    height: 600,
                    background: "white",
                    position: "fixed",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10000,
                    borderRadius: 5,
                    overflow: "auto"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        position: "fixed",
                        top: 0,
                        height: 50,
                        width: "100%",
                        borderRadius: "5px 5px 0 0",
                        backgroundColor: "white",
                        padding: 5,
                        borderBottom: "3.5px solid #0edabf",
                        alignItems: "center",
                    }}
                >
                    <span>{title}</span>
                    <i
                        className="fa-solid fa-xmark mouseover"
                        onClick={handleClose}
                        style={{
                            color: "gainsboro",
                            marginLeft: "auto",
                            fontSize: "1.8em",
                        }}
                    ></i>
                </div>
                <div style={{ height: "150%" }}></div>
            </div>
        </>
    );
}

export default Modal;
