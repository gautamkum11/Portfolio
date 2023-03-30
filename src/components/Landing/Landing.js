import React from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import g1 from "./g1.jpg"
import resumePdf from "./g2.pdf"
import './Landing.css';

import {
    FaLinkedin,
    FaGithub
} from 'react-icons/fa';

function Landing() {

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: "rgb(245, 101, 57)",
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid rgb(245, 101, 57)`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: "rgb(234, 234, 234)",
                color: "rgb(33, 33, 33)",
                border: `3px solid rgb(234, 234, 234)`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: "rgb(245, 101, 57)",
            color: "rgb(33, 33, 33)",
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid rgb(245, 101, 57)`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: "rgb(33, 33, 33)",
                color: "rgb(234, 234, 234)",
                border: `3px solid rgb(234, 234, 234)`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div className='landing--container-left' style={{ backgroundColor: "rgb(245, 101, 57)" }}>
                    <div className='lcl--content'>
                            <a
                                href="https://www.linkedin.com/in/gautam-kumawat-2a7965205/"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: "rgb(33, 33, 33)" }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                            <a
                                href="https://github.com/gautamkum11"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: "rgb(33, 33, 33)" }}
                                    aria-label='GitHub'
                                />
                            </a>
                    </div>
                </div>
                <img
                    src= {g1}
                    alt=''
                    className='landing--img'
                    style={{borderColor: "rgb(33, 33, 33"}}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: "rgb(33, 33, 33)" }}
                >
                    <div className='lcr--content' style={{ color: "rgb(234, 234, 234)" }}>
                        <h6>Full Stack Developer</h6>
                        <h1>Gautam Kumawat</h1>
                        <p>There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these.</p>

                        <div className='lcr-buttonContainer'>
                                <a
                                    href={resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.resumeBtn}>
                                        Download CV
                                    </Button>
                                </a>
                            
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
