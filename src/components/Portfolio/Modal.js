import React from "react";

function Modal(props) {
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
                onClick={props.handleClose}
            ></div>
            <div style={{width: 800, height : 600, background : "white", position : "fixed", left : "50%", top :"50%", transform :"translate(-50%, -50%)", zIndex : 10000, borderRadius : 5}}></div>
        </>
    );
}

export default Modal;
