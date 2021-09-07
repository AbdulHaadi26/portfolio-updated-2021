import React, { useState } from 'react';
import './style.css';

let data = [
    [{
        header: 'Frontend Development',
        type: 'Javascript',
        text: 'HTML, CSS, Bootstrap, Javascript, React.js, Redux, Material UI, Media Recorder Api, React-DND, Stripe, Easy Paisa'
    },
    {
        header: 'Backend Development',
        type: 'Javascript',
        text: 'Node.js, Express, Mongoose, Sequelize, AWS SDK, Oracle SDK, Stripe, Easy Paisa, Nodemailer, JWT, Socket.IO'
    },
    {
        header: 'Databases',
        type: 'MongoDB',
        text: 'MongoDB, MySql, SODA ATP'
    },
    {
        header: 'Cloud Services',
        type: 'AWS',
        text: 'AWS, Oracle, Heroku, Firebase, AWS S3, Oracle OCI'
    },
    {
        header: 'Miscellaneous',
        type: 'Dev Ops',
        text: 'Pre-signed Urls, Git, Linux, Bastion, Systemctl, Putty '
    }],
    [{
        header: 'Full Stack Developer',
        type: 'Cware Technologies',
        text: '12 Feb, 2020 - 30 Nov, 2021',
    },
    {
        header: 'Android/MEAN Developer',
        type: 'NUML',
        text: '6 Jan, 2019 - 12 Dec, 2019',
    }],
    [{
        header: 'BS Software Engineering',
        type: 'NUML',
        text: '6 Feb, 2016 - 6 Feb, 2020',
    },
    {
        header: 'Intermediate',
        type: 'FIC, Kohat',
        text: '2013 - 2015',
    },
    {
        header: 'Matric',
        type: 'FIC, Kohat',
        text: '2011 - 2013',
    }],
]


const Skills = () => {

    const [index, setIndex] = useState(0), [row, setRow] = useState(-1);

    return <div className="skills-container col-12">
        <h1 className="skills-heading">ABOUT ME<span>.</span></h1>
        <p className="skills-para">I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.</p>
        <div className="col-lg-11 col-12 d-flex flex-row skills-row">
            <h6 onClick={e => setIndex(0)} className={index === 0 ? "skills-header-a" : "skills-header"}>My Skills</h6>
            <h6 onClick={e => setIndex(1)} className={index === 1 ? "skills-header-a" : "skills-header"}>Experience</h6>
            <h6 onClick={e => setIndex(2)} className={index === 2 ? "skills-header-a" : "skills-header"}>Education</h6>
        </div>
        <div className="col-lg-11 col-12 d-flex flex-column skills-row p-4">
            {data[index].map((i, k) => {
                return <div key={k} className={`col-12 d-flex flex-column skills-row-des ${k === row ? 'skill-active' : ''}`}>
                    <div className={`col-12 d-flex flex-row skills-top-row align-items-center`}>
                        <h3 className="col-lg-9 col-5">{i.header}</h3>
                        <h4 className="col-lg-2 col-5 d-flex justify-content-lg-center justify-content-end">{i.type}</h4>
                        <div className={k === row ? 'skill-up' : 'skill-down'} onClick={e => setRow(row === k ? -1 : k)}></div>
                    </div>
                    <div className={`skill-border ${(k === row || k === row - 1) ? "skill-hide" : 'skill-visible'}`}></div>
                    {k === row && <h5>{i.text}</h5>}
                </div>
            })}
        </div>
    </div>
}

export default Skills;