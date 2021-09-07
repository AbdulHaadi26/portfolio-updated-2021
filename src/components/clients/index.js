import React, { useState } from 'react';
import ImageUser1 from '../../assets/testimonial-1.png';
import ImageUser2 from '../../assets/testimonial-2.png';
import ImageUser3 from '../../assets/testimonial-3.png';
import './style.css';

let data = [
    {
        name: 'arsijosi',
        job: 'Fiverr',
        text: 'Seller has done excellent job in quality of code. He is and will be my go to person for MERN application development.',
        img: ImageUser1
    },

    {
        name: 'sheveion_77',
        job: 'Fiverr',
        text: 'Top class developer! Very professional and know how to get the job done. I highly recommend him.',
        img: ImageUser3
    },

    {
        name: 'stellar1990',
        job: 'Fiverr',
        text: 'Great work! he will always help out and go the extra mile! he went above my expectations very kind! very fast worker. Would buy again 10/10!',
        img: ImageUser2
    },

    {
        name: 'arsijosi',
        job: 'Fiverr',
        text: 'Thank you Abdul for delivering exceptional quality work. I highly recommend Abdul. He is honest and very well knowledgeable about website development. Many thanks',
        img: ImageUser1
    }
]

const Clients = ({ innerRef }) => {
    const [index, setIndex] = useState(0);

    return <div ref={innerRef} className="clients-container col-12">
        <div className={`col-lg-8 col-12 d-flex flex-row align-items-center flex-wrap client-test`}>
            <div className="client-abs-container">
                <h1 className="client-des-1">
                    TESTIMONIAL
                </h1>
            </div>
            <div className="col-lg-4 col-12 d-flex align-items-center justify-content-center">
                <div className="client-img-container">
                    <img src={data[index].img} alt="Testimonial" />
                </div>
            </div>
            <div className="col-lg-8 col-12 mt-lg-0 mt-4 d-flex flex-column align-items-lg-start align-items-center justify-content-center">
                <h1>{data[index].text}</h1>
                <h6>{data[index].name} <span>- {data[index].job}</span></h6>
            </div>
        </div>
        <div className="col-lg-8 col-12 mt-lg-4 mt-4 d-flex flex-row align-items-center justify-content-center">
            {[0, 1, 2, 3].map(i => {
                return <h6 key={i} className={i === index ? "client-opt-active" : "client-opt"} onClick={e => setIndex(i)}>0{i}</h6>
            })}
        </div>
    </div>
};

export default Clients;