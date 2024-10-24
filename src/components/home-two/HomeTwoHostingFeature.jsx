import React from 'react'
import { Link } from 'react-router-dom';
function HomeTwoHostingFeature() {
    return (
        <>
            <section className="rts-hosting-feature-two cultured__white section__padding">
                <div className="container">
                    <div className="row g-40 justify-content-sm-center">
                        <div className="col-lg-6 col-md-10 col-sm-10">
                            <div className="rts-hosting-feature-two__image">
                                <img src="assets/images/hosting/hosting__feature__two.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-10 col-sm-10">
                            <div className="rts-hosting-feature-two__content">
                                <div className="rts-section__two">
                                    <h6 className="sub__title">feature</h6>
                                    <h3
                                        className="title font-40"
                                        data-sal="slide-down"
                                        data-sal-delay={300}
                                        data-sal-duration={800}
                                    >
                                        Advanced Security Features
                                    </h3>
                                    <p
                                        className="description"
                                        data-sal="slide-down"
                                        data-sal-delay={400}
                                        data-sal-duration={800}
                                    >
                                        We’ll move your first website to Cloud ways from any web host for
                                        without breaking your live site hosted.
                                    </p>
                                </div>
                                <div
                                    className="feature"
                                    data-sal="slide-down"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                    <ul className="feature__list">
                                        <li className="feature__item">
                                            Get unlimited SSL security certificates
                                        </li>
                                        <li className="feature__item">
                                            Protect your website from DDoS attacks
                                        </li>
                                        <li className="feature__item">
                                            Secure your files with automatic backups.
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/pricing" className="rts-btn rts-btn-secondary">
                                    get started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeTwoHostingFeature