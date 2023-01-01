import React from 'react';
import * as Fa from "react-icons/fa";
import * as Di from "react-icons/di";
import * as Si from "react-icons/si";

const Skills = () => {
    return (
        <div className='skills mt-10 flex gap-2' style={{color:'#0edabf', fontSize:'2.2em'}}>
            <Di.DiHtml5/>
            <Di.DiCss3Full/>
            <Si.SiJavascript size={'.8em'}/>
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
