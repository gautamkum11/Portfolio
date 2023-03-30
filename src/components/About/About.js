import React, { useContext } from 'react';
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>Who I am</h2>
                    <p style={{color:theme.tertiary80}}>My name's Gautam. I'm a web designer and developer.<br/><br/>I'm currently a pre-final year student of department of Chemical Engineering at IIT(BHU), Varanasi. My interests primarily lies in the domains of Competitive Programming, Web Development and computer science fundamentals like Data Structures, Algorithms and Object Oriented Programming. I also have experience with frameworks like Express.</p>
                </div>
                <div className="about-img">
                    <img 
                        src = {theme.aboutimg1}
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
