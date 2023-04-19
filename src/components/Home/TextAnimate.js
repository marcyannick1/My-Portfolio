import React from "react";
import { motion } from "framer-motion";

export function TextAnimate({ children, ownStyle, ...rest }) {
    const style = { display: "inline-block", overflow: "hidden" };
    
    const child = typeof children === "string" ? Array.of(children) : children;
     
    let words = []

    console.log(child)

    for (const letter of child) {
        if (typeof letter == "string") {
            words = letter.split(" ");
        }else{
            words = words.concat(letter.props.children.split(" "));
        }
    }

    return words.map((word, i) => {
        return (
            <div key={children + i} style={{...style, ...ownStyle}}>
                <motion.div
                    {...rest}
                    style={{ display: "inline-block", willChange: "transform" }}
                    custom={i}
                >
                    {word + (i !== words.length - 1 ? "\u00A0" : "")}
                </motion.div>
            </div>
        );
    });
}
