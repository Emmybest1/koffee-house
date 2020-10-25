import React from "react";
import { Link } from "react-router-dom";

import Header from "../../structures/header/Header.component";
import Main from "../../structures/main/Main.component";
import Section from "../../structures/section/Section.component";
import Button from "../../components/button/Button.component";
import Image from "../../components/image/Image.component";
import Li from "../../components/li/Li.component";
import Footer from "../../structures/footer/Footer.component";
import "./landing-page.style.scss";

const LandingPage = () => {
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
                            <Li>
                                <Link to="" target="_blank" className="link">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </Li>
                            <Li>
                                <Link to="" target="_blank" className="link">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </Li>
                            <Li>
                                <Link to="" target="_blank" className="link">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </Li>
                            <Link to="" target="_blank" className="link">
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </ul>
                    </div>
                </div>

                <Section className="img-description-container">
                    <Image
                        src={`${process.env.PUBLIC_URL}/assets/images/img-1_1000X.jpg`}
                        className="img__description"
                    />
                    <Image
                        src={`${process.env.PUBLIC_URL}/assets/images/img-2_1000X.jpg`}
                        className="img__description"
                    />
                    <Image
                        src={`${process.env.PUBLIC_URL}/assets/images/img-3_1000X.jpg`}
                        className="img__description"
                    />
                    <Image
                        src={`${process.env.PUBLIC_URL}/assets/images/img-4_1920X.jpg`}
                        className="img__description relative__coffe"
                    />
                    <Image
                        src={`${process.env.PUBLIC_URL}/assets/images/img-5_1920X.png`}
                        className="img__description absolute__coffe"
                    />
                </Section>
            </Main>
            <Footer />
        </div>
    );
};
export default LandingPage;
