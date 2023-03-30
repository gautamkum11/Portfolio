import html from '../assets/svg/skills/html.svg'
import Node from '../assets/svg/skills/Node.svg'
import Express from '../assets/svg/skills/Express.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'node':
            return Node;
        case 'express':
            return Express;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'c++':
            return cplusplus;
        default:
            break;
    }
}
