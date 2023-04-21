import React from "react";
import { FaReact, FaBootstrap, FaPhp } from "react-icons/fa";
import { DiHtml5, DiCss3Full, DiJqueryLogo } from "react-icons/di";
import {
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiMysql,
    SiNextdotjs,
    SiPrisma,
    SiChakraui
} from "react-icons/si";
import { motion } from "framer-motion";
import { item } from "../Portfolio/ContainerAnimate";

const Skills = () => {
    return (
        <motion.div
            variants={item}
            className="skills mt-10 flex flex-wrap gap-2"
            style={{ color: "#0edabf", fontSize: "2.2em" }}
        >
            <DiHtml5 />
            <DiCss3Full />
            <SiJavascript size={".9em"} />
            <SiTypescript size={".9em"} />
            <DiJqueryLogo />
            <FaReact />
            <SiTailwindcss />
            <FaBootstrap />
            <FaPhp />
            <SiMysql />
            <SiNextdotjs size={".9em"}/>
            <SiChakraui size={".9em"}/>
            <SiPrisma size={".9em"}/>
        </motion.div>
    );
};

export default Skills;
