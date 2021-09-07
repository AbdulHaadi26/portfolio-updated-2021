import React from 'react';
import Github from '../../assets/github.svg';
import Facebook from '../../assets/facebook.svg';
import Insta from '../../assets/instagram.svg';
import Linkedin from '../../assets/linkedin.svg';
import UpArrow from '../../assets/up-arrow-long.svg';
import './style.css';

const Footer = () => {
    return <>
        <div className="col-12 sub-footer d-flex flex-row justify-content-center">
            <div className="col-lg-8 col-12 d-flex flex-row justify-content-between">
                <h1 className="sub-footer-header">CODEX.</h1>
                <button type="button" onClick={e => window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })}>
                    <img src={UpArrow} alt="Up Arrow" />
                </button>
            </div>
        </div>
        <div className="col-12 footer d-flex flex-column align-items-center">
            <div className="col-lg-8 col-12 d-flex flex-row flex-wrap justify-content-center">
                {[
                    { title: Facebook, link: 'https://www.facebook.com/AbdulHaadiSpeedster' },
                    { title: Linkedin, link: 'https://www.linkedin.com/in/abdulhaadirana' },
                    { title: Insta, link: 'https://www.instagram.com/abdulhaadidev' },
                    { title: Github, link: 'https://github.com/AbdulHaadi26' }
                ].map((i, k) => {
                    return <div className="footer-des-social" key={k} onClick={e => window.open((i.link))}>
                        <img src={i.title} alt="Social" />
                    </div>
                })}
            </div>
            <h6 className="copy-right">Copyright &#169; Codex, 2021</h6>
        </div>
    </>
}

export default Footer;