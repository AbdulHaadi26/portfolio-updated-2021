import React, { useState } from 'react';
import ImgFileO from '../../assets/fileo.svg';
import ImgLuna from '../../assets/luna.png';
import ImgData from '../../assets/data-glitch.png';
import ImgDocs from '../../assets/docs.png';
import ImgSH from '../../assets/share-care.png';
import VideoItem from '../../assets/video.mp4';
import './style.css';
let styleLarge = {
    width: '450px'
};

let styleSmall = {
    width: '250px'
}

const Portfolio = () => {

    const [index, setIndex] = useState(0);

    return <div className="portfolio-container col-12">
        <h1 className="portfolio-heading">MY PROJECTS<span>.</span></h1>
        <div style={{ width: '100%', height: '1px' }}></div>
        <p className="portfolio-para">I am a freelance full stack developer based in Islamabad, Pakistan. Focused on creating highly interactive and responsive interfaces. <br/> Scroll through some of our latest projects and if you see something you like? </p>
        <div style={{ width: '100%', height: '1px' }}></div>
        <div className="portfolio-moving-div1 portfolio-main" onMouseEnter={e => setIndex(0)} style={index !== 1 ? styleLarge : styleSmall}>
            <h4>Full Stack Developer</h4>
            <h6>File-O</h6>
            <div className={index !== 1 ? "portfolio-arrow-static" : "portfolio-arrow"} onClick={e => window.open('https://www.file-o.com')}></div>
            <img src={ImgFileO} alt="File-O" className={index !== 1 ? "logo-right w-280" : "logo-right-static w-280"} />
            <img src={ImgFileO} alt="File-O" className={index !== 1 ? "logo-left w-280" : "logo-left-static w-280"} />
        </div>
        <div className="portfolio-moving-div2 portfolio-main" onMouseEnter={e => setIndex(1)} onMouseLeave={e => setIndex(0)} style={index === 1 ? styleLarge : styleSmall}>
            <h4>MERN Developer</h4>
            <h6>Luna Estates</h6>
            <div className={index === 1 ? "portfolio-arrow-static" : "portfolio-arrow"}></div>
            <img src={ImgLuna} alt="Luna Estates" className={index === 1 ? "logo-right w-240" : "logo-right-static w-240"} />
            <img src={ImgLuna} alt="Luna Estates" className={index === 1 ? "logo-left w-240" : "logo-left-static w-240"} />
        </div>
        <div style={{ width: '100%', height: '1px' }}></div>
        <div className="portfolio-moving-div4 portfolio-main" onMouseEnter={e => setIndex(3)} onMouseLeave={e => setIndex(0)} style={index === 3 ? styleLarge : styleSmall}>
            <h4>React Developer</h4>
            <h6>File-O Docs</h6>
            <div className={index === 3 ? "portfolio-arrow-static" : "portfolio-arrow"} onClick={e => window.open('https://data-glitch.herokuapp.com')}></div>
            <img src={ImgDocs} alt="File-O" className={index === 3 ? "logo-right w-280" : "logo-right-static w-280"} />
            <img src={ImgDocs} alt="File-O" className={index === 3 ? "logo-left w-280" : "logo-left-static w-280"} />
        </div>
        <div className="portfolio-moving-div3 portfolio-main" onMouseEnter={e => setIndex(2)} style={index !== 3 ? styleLarge : styleSmall}>
            <h4>MERN Developer</h4>
            <h6>Data Glitch</h6>
            <div className={index !== 3 ? "portfolio-arrow-static" : "portfolio-arrow"} onClick={e => window.open('https://lunarebirth.herokuapp.com')}></div>
            <img src={ImgData} alt="Data Glitch" className={index !== 3 ? "logo-right w-240" : "logo-right-static w-240"} />
            <img src={ImgData} alt="Data-Glitch" className={index !== 3 ? "logo-left w-240" : "logo-left-static w-240"} />
        </div>
        <div style={{ width: '100%', height: '1px' }}></div>
        <div className="portfolio-moving-div5 portfolio-main" onMouseEnter={e => setIndex(4)} style={index !== 5 ? styleLarge : styleSmall}>
            <video src={VideoItem} type="video/mp4" autoPlay muted loop onContextMenu={e => e.preventDefault()} ></video>
            <h4>React Developer</h4>
            <h6>Portfolio (Outdated)</h6>
            <div className={index !== 5 ? "portfolio-arrow-static" : "portfolio-arrow"} onClick={e => window.open('https://lunarebirth.herokuapp.com')}></div>
        </div>
        <div className="portfolio-moving-div6 portfolio-main" onMouseEnter={e => setIndex(5)} onMouseLeave={e => setIndex(0)} style={index === 5 ? styleLarge : styleSmall}>
            <h4>Android/MEAN Developer</h4>
            <h6>Share {'&'} Care</h6>
            <img src={ImgSH} alt="Share" className={index === 5 ? "logo-right w-280" : "logo-right-static w-280"} />
            <img src={ImgSH} alt="Share" className={index === 5 ? "logo-left w-240" : "logo-left-static w-240"} />
        </div>
    </div>
}

export default Portfolio;