import React from 'react'
import { Link } from 'react-router-dom'

function HomeThreeHostingFeatures() {
    return (
        <>
            <div className="rts-hosting-feature-area pt--120 pb-120">
                <div className="container">
                    <div className="section-inner">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="left-side-image">
                                    <img src="assets/images/feature/feature-hero-01.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-side-content">
                                    <div className="section-title-area text-start">
                                        <h3
                                            className="section-title"
                                            data-sal="slide-down"
                                            data-sal-delay={200}
                                            data-sal-duration={800}
                                        >
                                            Advanced Security Hosting Features
                                        </h3>
                                        <p
                                            className="desc"
                                            data-sal="slide-down"
                                            data-sal-delay={300}
                                            data-sal-duration={800}
                                        >
                                            We’ll move your first website to Cloud ways from any web host
                                            for without breaking your live site hosted on the old host..
                                        </p>
                                    </div>
                                    <ul className="feature-list">
                                        <li
                                            className="one"
                                            data-sal="slide-down"
                                            data-sal-delay={400}
                                            data-sal-duration={800}
                                        >
                                            <i className="fa-solid fa-circle-check" />
                                            Get unlimited SSL security certificates
                                        </li>
                                        <li
                                            className="two"
                                            data-sal="slide-down"
                                            data-sal-delay={500}
                                            data-sal-duration={800}
                                        >
                                            <i className="fa-solid fa-circle-check" />
                                            Protect your website from DDoS attacks
                                        </li>
                                        <li
                                            className="three"
                                            data-sal="slide-down"
                                            data-sal-delay={600}
                                            data-sal-duration={800}
                                        >
                                            <i className="fa-solid fa-circle-check" />
                                            Secure your files with automatic backups
                                        </li>
                                    </ul>
                                    <Link
                                        to="/pricing"
                                        className="get-started-btn rts-btn"
                                        data-sal="slide-down"
                                        data-sal-delay={700}
                                        data-sal-duration={800}
                                    >
                                        Get Started <i className="fa-light fa-angle-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-shape-area">
                    <img
                        className="one"
                        src="assets/images/feature/feature-rounded-shape.svg"
                        alt=""
                    />
                </div>
            </div>

        </>
    )
}

export default HomeThreeHostingFeatures