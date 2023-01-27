import React from 'react';
import {FaReact, FaBootstrap, FaPhp} from "react-icons/fa";
import {DiHtml5, DiCss3Full, DiJqueryLogo} from "react-icons/di";
import {SiJavascript, SiTypescript, SiTailwindcss, SiMysql} from "react-icons/si";

const Skills = () => {
    return (
        <div className='skills mt-10 flex flex-wrap gap-2' style={{color:'#0edabf', fontSize:'2.2em'}}>
            <DiHtml5/>
            <DiCss3Full/>
            <SiJavascript size={'.9em'}/>
            <SiTypescript size={'.9em'}/>
            <DiJqueryLogo/>
            <FaReact/>
            <SiTailwindcss/>
            <FaBootstrap/>
            <FaPhp/>
            <SiMysql/>
        </div>
    );
}

export default Skills;
