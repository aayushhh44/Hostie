import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function HomeFourBanner() {
    useEffect(() => {
		sal({
			threshold: 0.1,
			once: true,
		});
	}, []);
    return (
        <>
            <section
                className="rts-hero-four rts-hero__four"
                style={{ backgroundImage: "url(assets/images/banner/banner-hero-four.png)" }}
            >
                <div className="container">
                        <div className="row">
                        <div className="col-lg-8 col-xl-6 col-md-10">
                            <div
                                className="rts-hero-four__content"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                <p className="offer">
                                    Up to <span className="off">78%</span> off Web Hosting
                                </p>
                                <h1
                                    className="banner__title"
                                    data-sal="slide-down"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                  Best Hosting Services in Australia 
                                </h1>
                                <p
                                    className="description"
                                    data-sal="slide-down"
                                    data-sal-delay={600}
                                    data-sal-duration={800}
                                >
                                    High-performance hosting designed specifically for Aussie Business and high-traffic websites
                                </p>
                                <div
                                    className="feature"
                                    data-sal="slide-down"
                                    data-sal-delay={700}
                                    data-sal-duration={800}
                                >
                                    <ul className="feature__list">
                                        <li className="feature__item">100% Australian Owned</li>
                                        <li className="feature__item">High Performance Servers</li>
                                        <li className="feature__item">24/7 Support </li>
                                        <li className="feature__item">Free Website Migrations </li>
                                    </ul>
                                </div>
                                {/* <div
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeFourBanner