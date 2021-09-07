import React from 'react';
import './style.css';

let data = [
    {
        title: '01',
        subhead: 'Requirement Gathering',
        description: 'Eliciting requirements from the stakeholders to establish project goals and objectives.'
    },

    {
        title: '02',
        subhead: 'Planning',
        description: 'Creating a wireframe and deciding upon technologies to develop it. '
    },

    {
        title: '03',
        subhead: 'Development',
        description: 'Coding the project within the defined timeframe and budget.'
    },

    {
        title: '04',
        subhead: 'Testing',
        description: 'Deploy weekly changes to development url to involve client in the testing process.'
    }
]

const WorkProcess = ({ innerRef }) => {
    return <div ref={innerRef} className="work-container col-12">
        <div className="col-lg-8 col-12 d-flex flex-row align-items-center justify-content-lg-start justify-content-center">
            <div className="red-d-1"></div>
            <div className="red-d-2"></div>
        </div>
        <div className="work-abs-container">
            <h1 className="work-des-1">
                DEVELOPMENT
            </h1>
        </div>
        <div className="col-lg-8 col-12 d-flex flex-row align-items-center flex-wrap">
            <div className="col-lg-5 col-12">
                <h1 className="work-heading">How We Do Development?</h1>
            </div>
            <div className="col-lg-7 col-12 mt-lg-0 mt-4 d-flex flex-row flex-wrap justify-content-center">
                {data.map((i, k) => {
                    return <div key={k} className="col-lg-6 col-12 work-des d-flex flex-column">
                        <h6>{i.title}  /{i.subhead}</h6>
                        <p>{i.description}</p>
                    </div>
                })}
            </div>
        </div>
    </div>
};

export default WorkProcess;