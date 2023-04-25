import React from "react";
import { motion } from "framer-motion";

export function TextAnimate({ children, ownStyle, ...rest }) {
    const style = { display: "inline-block", overflow: "hidden" };
    const style2 = { display: "inline-block", willChange: "transform" };

    const child = typeof children === "string" ? Array.of(children) : children;

    let words = [];

    for (const letter of child) {
        if (typeof letter == "string") {
            words = letter.split(" ").map((word) => {
                return {
                    mot: word,
                    style: {},
                };
            });
        } else {
            words = words.concat(
                letter.props.children.split(" ").map((word) => {
                    return {
                        mot: word,
                        style: letter.props.style,
                    };
                })
            );
        }
    }

    return words.map((word, i) => {
        return (
            <div key={children + i} style={{ ...style, ...ownStyle }}>
                <motion.div {...rest} style={{ ...style2, ...word.style }} custom={i}>
                    {word.mot + (i !== words.length - 1 ? "\u00A0" : "")}
                </motion.div>
            </div>
        );
    });
}
