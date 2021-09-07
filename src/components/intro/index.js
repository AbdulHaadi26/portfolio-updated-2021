import React from 'react';
import './style.css';

const Intro = ({ innerRef }) => {
    return <div ref={innerRef} className="intro-container col-12">
        <div className="col-lg-8 col-12 d-flex flex-row align-items-center justify-content-lg-start justify-content-center">
            <div className="red-d-1"></div>
            <div className="red-d-2"></div>
        </div>

        <div className="col-lg-8 col-12 d-flex flex-row align-items-center flex-wrap mt-4">
            <div className="col-lg-5 col-12">
                <h1 className="intro-heading">3+ Years Of Experience In Full Stack Development.</h1>
            </div>
            <div className="col-lg-2 col-12 mt-lg-0 mt-4 d-flex flex-row justify-content-center align-items-center">
                <div className="intro-circle">
                    <h1>100<span style={{ fontSize: '16px' }}>%</span></h1>
                    <h3>Work Done</h3>
                </div>
            </div>
            <div className="col-lg-5 col-12 mt-lg-0 mt-4 d-flex flex-row justify-content-lg-end justify-content-center">
                <p className="intro-para">Full Stack Developer with 3+ years of hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages.</p>
            </div>
        </div>
    </div>
};

export default Intro;