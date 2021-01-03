import React, {useState} from 'react';

import {useUniqueIds} from '../../../hooks/useUniqueIds';
import Input from '../../partials/input/Input.component';
import './footer.style.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailId, submitBtnId] = useUniqueIds(2);

  const onChangeHandler = (e) => {
    e.stopPropagation();
    setEmail(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="container">
      <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="" />
      <div className="about-us-wrapper">
        <h3>About us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis quae earum totam alias odit
          dolorem voluptates a laboriosam facere, iusto ab fugiat inventore, odio itaque. Cumque harum consectetur
          minus.
        </p>
      </div>
      <div className="opening-hours-wrapper">
        <h3>Opening hours</h3>
        <ul>
          <li>
            <section className="container-flex">
              <p>Monday</p>
              <time>09:00 - 22:00</time>
            </section>
          </li>
          <li>
            <section className="container-flex">
              <p>Tuesday</p>
              <time>09:00 - 22:00</time>
            </section>
          </li>
          <li>
            <section className="container-flex">
              <p>Wednesday</p>
              <time>09:00 - 22:00</time>
            </section>
          </li>
          <li>
            <section className="container-flex">
              <p>Thursday</p>
              <time>09:00 - 22:00</time>
            </section>
          </li>
          <li>
            <section className="container-flex">
              <p>Friday</p>
              <time>09:00 - 22:00</time>
            </section>
          </li>
          <li>
            <section className="container-flex">
              <p>Saturday</p>
              <time>09:00 - 22:00</time>
            </section>
          </li>
          <li>
            <section className="container-flex">
              <p>Sunday</p>
              <time>09:00 - 22:00</time>
            </section>
          </li>
        </ul>
      </div>

      <div className="contact-us-wrapper">
        <h3>Contact us</h3>
        <ul>
          <li>Tallinn Estonia</li>
          <li>africlite@gmail.com</li>
          <li>+37258311750</li>
        </ul>
      </div>

      <form onSubmit={onSubmitHandler}>
        <h3>News letter</h3>
        <div className="input-wrapper">
          <Input
            type="email"
            id={emailId}
            value={email}
            onChange={onChangeHandler}
            placeholder="YOUR EMAIL"
            autoFocus={true}
          />
          <Input type="submit" id={submitBtnId} value="Submit" aria-label="Submit" />
        </div>
      </form>
    </footer>
  );
};

export default Footer;
