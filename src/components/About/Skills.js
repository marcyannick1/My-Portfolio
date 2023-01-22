import React from 'react';
import * as Fa from "react-icons/fa";
import * as Di from "react-icons/di";
import * as Si from "react-icons/si";

const Skills = () => {
    return (
        <div className='skills mt-10 flex flex-wrap gap-2' style={{color:'#0edabf', fontSize:'2.2em'}}>
            <Di.DiHtml5/>
            <Di.DiCss3Full/>
            <Si.SiJavascript size={'.9em'}/>
            <Si.SiTypescript size={'.9em'}/>
            <Di.DiJqueryLogo/>
            <Fa.FaReact/>
            <Si.SiTailwindcss/>
            <Fa.FaBootstrap/>
            <Fa.FaPhp/>
            <Si.SiMysql/>
        </div>
    );
}

export default Skills;
