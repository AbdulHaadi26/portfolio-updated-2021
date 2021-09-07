import React, { useState } from 'react';
import Arrow from '../../assets/long-arrow.svg';
import Axios from 'axios';
import './style.css';

const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        subject: '',
        company: '',
        email: '',
        message: ''
    }), [success, setSuccess] = useState(0);

    const handleInput = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        let url = `https://email-server-26.herokuapp.com/sendMail`;

        await Axios.post(url, form);

        setForm({
            name: '',
            subject: '',
            company: '',
            email: '',
            message: ''
        });
        
        setSuccess(1);


    };

    return <div className="contact-container col-12">
        <h1 className="contact-heading">Contact<span>.</span></h1>
        <p className="contact-para">If you're interested in our partnership and would like to find out some more information, one of our advisors is excited to help. <br />Want to partner with us? </p>
        <div className="col-xl-11 col-lg-11 col-12 d-flex flex-row flex-wrap">
            <div className="col-lg-5 col-12 d-flex flex-column contact-row p-4">
                <h1 className="p-4">{`Let's Collaborate`}</h1>
                <h6 className="mt-6 p-4">abdulhaadirao@gmail.com</h6>
                <div className="col-12 p-0 d-flex flex-row flex-wrap justify-content-between mt-auto">
                    <div className="d-flex flex-column p-4">
                        <h4>Location</h4>
                        <h6>Islamabad, Pakistan</h6>
                    </div>
                    <div className="d-flex flex-column p-4">
                        <h4>Contact</h4>
                        <h6>+92310-8994313</h6>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-12 d-flex justify-content-center align-items-center">
                <div className="vertical-line"></div>
            </div>
            <form onSubmit={handleSubmit} className="col-lg-5 col-12 d-flex flex-column contact-form p-4">
                <h1 className="p-4">Say Hello</h1>
                <div className="col-12 p-0 d-flex flex-row flex-wrap ">
                    <div className="col-lg-6 col-12 p-4 d-flex flex-column contact-input">
                        <h6>NAME</h6>
                        <input name={'name'} value={form.name} onChange={e => handleInput(e)} placeholder="Your name" />
                        <div className="bb-contact"></div>
                    </div>
                    <div className="col-lg-6 col-12 p-4 d-flex flex-column contact-input">
                        <h6>SUBJECT</h6>
                        <select name={'subject'} value={form.subject} onChange={e => handleInput(e)} placeholder="Choose subject" defaultValue="">
                            <option value="" disabled hidden>Choose subject</option>
                            <option value="Webiste Development">Website Development</option>
                            <option value="Webiste Design">Website Design</option>
                            <option value={`Bugs & Fixes`}>Bugs {'&'} Fixes</option>
                        </select>
                        <div className="bb-contact"></div>
                    </div>
                    <div className="col-lg-6 col-12 p-4 d-flex flex-column contact-input">
                        <h6>COMPANY</h6>
                        <input name={'company'} value={form.company} onChange={e => handleInput(e)} placeholder="Company name" />
                        <div className="bb-contact"></div>
                    </div>
                    <div className="col-lg-6 col-12 p-4 d-flex flex-column contact-input">
                        <h6>EMAIL</h6>
                        <input name={'email'} value={form.email} type="email" onChange={e => handleInput(e)} placeholder="Email address" />
                        <div className="bb-contact"></div>
                    </div>
                    <div className="col-lg-6 col-12 p-4 d-flex flex-column contact-input">
                        <h6>MESSAGE</h6>
                        <textarea name={'message'} value={form.message} onChange={e => handleInput(e)} placeholder="Start typing here" />
                        <div className="bb-contact"></div>
                    </div>
                </div>
                {success === 0 && <button type="submit" className="d-flex flex-row p-4 btn-contact d-flex flex-row align-items-center">
                    <h5>Submit</h5>
                    <img src={Arrow} alt="Arrow" />
                </button>}
                {success === 1 && <button type="submit" className="d-flex flex-row p-4 btn-contact d-flex flex-row align-items-center">
                    <h5 style={{ textDecoration: 'none' }}>Thank you for contacting.</h5>
                </button>}
            </form>
        </div>
    </div>
}

export default Contact;