import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './style.css'

const SideNav = ({ nav, setNav, aboutRef, workRef, contactRef }) => {

    return <>
        {nav && <div className={`bg sNB`} onClick={e => setNav(false)} />}
        <CSSTransition in={nav} classNames="d" timeout={{ enter: 200, exit: 100 }} unmountOnExit appear>
            <div className="sNS col-12 d-flex flex-column">
                <div className="svg" onClick={e => setNav(false)} />
                <h1 className="sidenav-header">CODEX.</h1>
                <h6 onClick={e => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                    setNav(false);
                }}>HOME.</h6>
                <h6 onClick={e => {
                    window.scrollTo({
                        top: aboutRef && aboutRef.current && aboutRef.current.offsetTop ? aboutRef.current.offsetTop - 100 : 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                    setNav(false);
                }}>ABOUT.</h6>
                <h6 onClick={e => {
                    window.scrollTo({
                        top: workRef && workRef.current && workRef.current.offsetTop ? workRef.current.offsetTop - 100 : 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                    setNav(false);
                }}>PORTFOLIO.</h6>
                <h6 onClick={e => {
                    window.scrollTo({
                        top: contactRef && contactRef.current && contactRef.current.offsetTop ? contactRef.current.offsetTop - 100 : 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                    setNav(false);
                }}>CONTACT.</h6>
            </div>
        </CSSTransition>
    </>
}

export default SideNav;