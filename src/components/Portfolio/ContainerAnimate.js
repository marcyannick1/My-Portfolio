import React from "react";
import { motion } from "framer-motion";

export default function ContainerAnimate({
    children,
    delayChildren,
    staggerChildren,
    className,
}) {
    const container = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: delayChildren,
                staggerChildren: staggerChildren,
            },
        },
    };
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};
