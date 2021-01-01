import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../structures/header/Header.component';
import Main from '../../structures/main/Main.component';
import Button from '../../partials/button/Button.component';
import Footer from '../../structures/footer/Footer.component';
import './home-page.style.scss';

const HomePage = () => {
  return (
    <div className="landing-page-parent-wrapper">
      <Header />
      <Main>
        <div className="container landing-page-container">
          <div className="container-flex button-social-media-container">
            <div className="button-wrapper">
              <h3>Get Up,Get Coffee,Be Happy</h3>
              <Button>
                <Link to="/shop" className="link">
                  Book
                </Link>
              </Button>
            </div>
            <ul className="container-flex social-media-wrapper">
              <li>
                <Link to="" target="_blank" className="link">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="" target="_blank" className="link">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="" target="_blank" className="link">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <Link to="" target="_blank" className="link">
                <i className="fab fa-linkedin"></i>
              </Link>
            </ul>
          </div>
        </div>

        <section className="img-description-container">
          <img src={`${process.env.PUBLIC_URL}/assets/images/img-1_1000X.jpg`} alt="" className="img__description" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/img-2_1000X.jpg`} alt="" className="img__description" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/img-3_1000X.jpg`} alt="" className="img__description" />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/img-4_1920X.jpg`}
            alt=""
            className="img__description relative__coffe"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/img-5_1920X.png`}
            alt=""
            className="img__description absolute__coffe"
          />
        </section>
      </Main>
      <Footer />
    </div>
  );
};
export default HomePage;
