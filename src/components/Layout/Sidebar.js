import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import {
    FcHome,
    FcBusinesswoman,
    FcSupport,
    FcIdea,
    FcReading,
} from 'react-icons/fc';
import { GrMail } from 'react-icons/gr';
import { FaGithubAlt } from 'react-icons/fa';
import { SiLivejournal } from 'react-icons/si';
import { IoDocumentAttach } from "react-icons/io5";
import classes from './Sidebar.module.css';
import { IconContext } from 'react-icons';

const Sidebar = (props) => {
    return (
        <nav className={`${classes.nav} ${props.className && props.className}`}>
            <div className={classes.profile}>
                <div className={classes['profile-img']}>
                    <img src="/img/profile.PNG" alt={'profileImage'} />
                </div>
                <div className={classes.icons}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/EarthlyZ9"
                    >
                        <IconContext.Provider value={{ size: 28 }}>
                            <>
                                <FaGithubAlt title="GitHub" />
                            </>
                        </IconContext.Provider>
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://notion.earthlyz9.dev"
                    >
                        <IconContext.Provider value={{ size: 25 }}>
                            <>
                                <SiLivejournal  title="Blog" />
                            </>
                        </IconContext.Provider>
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.rallit.com/resumes/11292@linda2927/%EC%9D%B4%EC%A7%80%EC%88%98"
                    >
                        <IconContext.Provider value={{ size: 28 }}>
                            <>
                                <IoDocumentAttach title="Resumé" />
                            </>
                        </IconContext.Provider>
                    </a>
                </div>
            </div>
            <div className={classes.items}>
                <NavHashLink
                    to={'/#home'}
                    className={
                        props.hashLocation === '/#/#home' &&
                        classes['menu-item']
                    }
                    onClick={props.onMenuClick && props.onMenuClick}
                >
                    <FcHome />
                    Home
                </NavHashLink>
                <NavHashLink
                    to="/#about-me"
                    className={
                        props.hashLocation === '/#/#about-me' &&
                        classes['menu-item']
                    }
                    onClick={props.onMenuClick && props.onMenuClick}
                >
                    <FcBusinesswoman />
                    About Me
                </NavHashLink>
                <NavHashLink
                    to={'/#skills'}
                    className={
                        props.hashLocation === '/#/#skills' &&
                        classes['menu-item']
                    }
                    onClick={props.onMenuClick && props.onMenuClick}
                >
                    <FcSupport />
                    Skills
                </NavHashLink>
                <NavHashLink
                    to={'/#projects'}
                    className={
                        props.hashLocation === '/#/#projects' &&
                        classes['menu-item']
                    }
                    onClick={props.onMenuClick && props.onMenuClick}
                >
                    <FcIdea />
                    Projects
                </NavHashLink>
                <NavHashLink
                    to={'/#study'}
                    className={
                        props.hashLocation === '/#/#study' &&
                        classes['menu-item']
                    }
                    onClick={props.onMenuClick && props.onMenuClick}
                >
                    <FcReading />
                    Study
                </NavHashLink>
            </div>
            <div className={classes.contact}>
                <a
                    href="mailto:earthlyz9.dev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconContext.Provider value={{ size: 18 }}>
                        <>
                            <GrMail />
                        </>
                    </IconContext.Provider>
                    Contact Me!
                </a>
            </div>
        </nav>
    );
};

export default Sidebar;
