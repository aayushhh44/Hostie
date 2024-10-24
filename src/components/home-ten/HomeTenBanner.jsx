import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function HomeTenBanner() {
    useEffect(() => {
		sal({
			threshold: 0.1,
			once: true,
		});
	}, []);
    return (
        <>
            <section
                className="rts-hero-four rts-hero__four mern__hosting"
                style={{ backgroundImage: "url(assets/images/banner/banner__ten.jpg)" }}
            >
                <div className="container">
                    <div className="row g-5 justify-content-between align-items-center">
                        <div className="col-lg-8 col-xl-6 col-md-10">
                            <div
                                className="rts-hero-four__content"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                <p className="offer">
                                    Up to <span className="off">78%</span> off MERN Hosting
                                </p>
                                <h1
                                    className="banner__title"
                                    data-sal="slide-down"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                    MERN Stack Hosting
                                </h1>
                                <p
                                    className="description"
                                    data-sal="slide-down"
                                    data-sal-delay={600}
                                    data-sal-duration={800}
                                >
                                    Find hosting tailored for MERN Stack applications, offering full
                                    support for MongoDB, Express.js, React, and Node.js.
                                </p>
                                <div
                                    className="feature"
                                    data-sal="slide-down"
                                    data-sal-delay={700}
                                    data-sal-duration={800}
                                >
                                    <ul className="feature__list">
                                        <li className="feature__item">Node.js Supported </li>
                                        <li className="feature__item"> MongoDB Supported </li>
                                        <li className="feature__item"> Litespeed Web Server </li>
                                        <li className="feature__item"> 99.99% Uptime </li>
                                        <li className="feature__item"> 24/7/365 Day Support </li>
                                    </ul>
                                </div>
                                <div
                                    className="banner-buttons"
                                    data-sal="slide-down"
                                    data-sal-delay={800}
                                    data-sal-duration={800}
                                >
                                    <Link
                                        to="/pricing"
                                        className="rts-btn btn__long secondary__bg secondary__color"
                                    >
                                        get started <i className="fa-solid fa-chevron-right" />
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="rts-btn btn__long border__white white__color"
                                    >
                                        contact us <i className="fa-solid fa-chevron-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeTenBanner