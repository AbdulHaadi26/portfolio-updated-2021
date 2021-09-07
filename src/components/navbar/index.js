import React, { useState } from 'react';
import { useEffect } from 'react';
import './style.css';

const Navbar = (props) => {
    const { aboutRef, workRef, contactRef, setNav } = props;

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    return <div className={`nav-container col-12 p-0 d-flex flex-row justify-content-center 
    ${offset > (aboutRef && aboutRef.current && aboutRef.current.offsetTop ? aboutRef.current.offsetTop : 0) - 200 &&
            (aboutRef && aboutRef.current && aboutRef.current.offsetTop ? aboutRef.current.offsetTop : 0) !== 0 ? 'nav-container-abst' : ''}`}>
        <div className="col-lg-8 col-12 p-4 d-flex flex-row justify-content-between align-items-center">
            <h1 className="nav-header">CODEX.</h1>
            <div className="d-flex flex-row hide-sm nav-mid-row">
                <h6 onClick={e => window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })}>HOME.</h6>
                <h6 onClick={e => window.scrollTo({
                    top: aboutRef && aboutRef.current && aboutRef.current.offsetTop ? aboutRef.current.offsetTop - 100 : 0,
                    left: 0,
                    behavior: 'smooth'
                })}>ABOUT.</h6>
                <h6 onClick={e => window.scrollTo({
                    top: workRef && workRef.current && workRef.current.offsetTop ? workRef.current.offsetTop - 100 : 0,
                    left: 0,
                    behavior: 'smooth'
                })}>PORTFOLIO.</h6>
                <h6 onClick={e => window.scrollTo({
                    top: contactRef && contactRef.current && contactRef.current.offsetTop ? contactRef.current.offsetTop - 100 : 0,
                    left: 0,
                    behavior: 'smooth'
                })}>CONTACT.</h6>
            </div>
            <div className="btn-ham" onClick={e => setNav(true)}></div>
        </div>
    </div>
};

export default Navbar;