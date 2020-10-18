import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'

import './landing-page.style.scss'

const Header = lazy(() => import("../../structures/header/Header.component"))
const Main = lazy(() => import("../../structures/main/Main.component"))
const Section = lazy(() => import("../../structures/section/Section.component"))
const Button = lazy(() => import("../../components/button/Button.component"))
const Image = lazy(() => import("../../components/image/Image.component"))
const Li = lazy(() => import("../../components/li/Li.component"))
const Footer = lazy(() => import("../../structures/footer/Footer.component"))

const LandingPage = () => {

    return (
        <div className="landing-page-parent-wrapper">
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Main>
                    <div className="container landing-page-container">
                        <div className="container-flex button-social-media-container">
                            <div className="button-wrapper">
                                <h3>Get Up,Get Coffee,Be Happy</h3>
                                <Button>
                                    <Link to="/booking" className="link">Book</Link>
                                </Button>
                            </div>
                            <ul className="container-flex social-media-wrapper">

                                <Li><Link to="" target="_blank" className="link"><i className="fab fa-twitter"></i></Link></Li>
                                <Li><Link to="" target="_blank" className="link"><i className="fab fa-facebook-f"></i></Link></Li>
                                <Li><Link to="" target="_blank" className="link"><i className="fab fa-instagram"></i></Link></Li>
                                <Link to="" target="_blank" className="link"><i className="fab fa-linkedin"></i></Link>
                            </ul>
                        </div>
                    </div>

                    <Section>
                        <Image src={`${process.env.PUBLIC_URL}/assets/images/img-1_1000X.jpg`} className="img__description" />
                        <Image src={`${process.env.PUBLIC_URL}/assets/images/img-2_1000X.jpg`} className="img__description" />
                        <Image src={`${process.env.PUBLIC_URL}/assets/images/img-3_1000X.jpg`} className="img__description" />
                        <Image src={`${process.env.PUBLIC_URL}/assets/images/img-4_1920X.jpg`} className="img__description relative__coffe" />
                        <Image src={`${process.env.PUBLIC_URL}/assets/images/img-5_1920X.png`} className="img__description absolute__coffe" />
                    </Section>
                </Main>
                <Footer />
            </Suspense>
        </div>
    )
}
export default LandingPage
