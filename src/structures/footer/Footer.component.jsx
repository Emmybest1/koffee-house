import React, { Suspense, lazy, useState,useRef } from 'react'

import { useUniqueIds } from '../../hooks/useUniqueIds'
import './footer.style.scss'

const Input = lazy(() => import("../../components/input/Input.component"));
const Section = lazy(() => import("../section/Section.component"));

const Footer = () => {
    const inputRef = useRef(null);
    const [email, setEmail] = useState("");
    const [emailId, submitBtnId] = useUniqueIds(2);

    const onChangeHandler = e => {
        e.stopPropagation();
        setEmail(e.target.value);
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        setEmail("");
    };

    const focus = ()=>{
        inputRef.current.focus()
    }
    

    return (
        <footer className="container">
            {/* About us */}
            <Suspense fallback={<div>Loading...</div>}>
                <div className="about-us-wrapper">
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis quae earum totam alias odit dolorem voluptates a laboriosam facere, iusto ab fugiat inventore, odio itaque. Cumque harum consectetur minus.</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="" />

                {/* Opening hours */}
                <div className="opening-hours-wrapper">
                    <h3>Opening hours</h3>
                    <ul>
                        <li>
                            <Section className="container-flex">
                                <p>Monday</p>
                                <time>09:00 - 22:00</time>
                            </Section>
                        </li>
                        <li>
                            <Section className="container-flex">
                                <p>Tuesday</p>
                                <time>09:00 - 22:00</time>
                            </Section>
                        </li>
                        <li>
                            <Section className="container-flex">
                                <p>Wednesday</p>
                                <time>09:00 - 22:00</time>
                            </Section>
                        </li>
                        <li>
                            <Section className="container-flex">
                                <p>Thursday</p>
                                <time>09:00 - 22:00</time>
                            </Section>
                        </li>
                        <li>
                            <Section className="container-flex">
                                <p>Friday</p>
                                <time>09:00 - 22:00</time>
                            </Section>
                        </li>
                        <li>
                            <Section className="container-flex">
                                <p>Saturday</p>
                                <time>09:00 - 22:00</time>
                            </Section>
                        </li>
                        <li>
                            <Section className="container-flex">
                                <p>Sunday</p>
                                <time>09:00 - 22:00</time>
                            </Section>
                        </li>
                    </ul>
                </div>

                {/* Contact us */}
                <div className="contact-us-wrapper">
                    <h3>Contact us</h3>
                    <ul>
                        <li>fake address no fake2 7228822</li>
                        <li>fake@fake.fake</li>
                        <li>+0383733838383</li>
                    </ul>
                </div>

                {/* News letter */}
                <form onSubmit={onSubmitHandler} >
                    <h3>News letter</h3>
                    <div className="input-wrapper">
                        <Input type="email" id={emailId} value={email} onChange={onChangeHandler} placeholder="YOUR EMAIL" autoFocus={true}/>
                        <Input type="submit" id={submitBtnId} value="Submit" />
                    </div>
                </form>
            </Suspense>
        </footer>
    )
}

export default Footer
