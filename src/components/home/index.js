import React from 'react';
import Navbar from '../navbar';
import Robot from '../../assets/hero-img.png';
import './style.css';

const Home = (props) => {

    return <div className="home-container col-12">
        <Navbar {...props} />
        <div className="home-abs-container">
            <h1 className="home-des-1">
                DEVELOPER
            </h1>
        </div>
        <div className="home-abs-social">
            {[
                { title: 'FB', link: 'https://www.facebook.com/AbdulHaadiSpeedster' },
                { title: 'LK', link: 'https://www.linkedin.com/in/abdulhaadirana' },
                { title: 'IN', link: 'https://www.instagram.com/abdulhaadidev' },
                { title: 'GT', link: 'https://github.com/AbdulHaadi26' }
            ].map((i, k) => {
                return <h6 className="home-des-social" key={k} onClick={e => window.open((i.link))}>
                    {i.title}
                </h6>
            })}
        </div>
        <div className="home-main-container col-12 d-flex flex-lg-row flex-column justify-content-center align-items-end">
            <div className="col-lg-6 col-12 d-flex justify-content-end align-items-center align-self-stretch">
                <div className="col-lg-8 col-12 d-flex flex-column align-items-lg-start align-items-center">
                    <h3>Hi. I AM <span className="home-des-2">HAADI</span></h3>
                    <h3>WEB DEVELOPER</h3>
                    <div className="d-flex flex-row mt-4">
                        <div className="home-button">
                            MY PORTFOLIO
                        </div>
                        <div className="home-send-email">
                            <div className="img-mail" onClick={e => window.open('mailto:abdulhaadirao@gmail.com')}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 mt-lg-0 mt-4">
            </div>
        </div>
        <img src={Robot} className="img-robot hide-sm" alt="Robot" />
    </div>
};

export default Home;