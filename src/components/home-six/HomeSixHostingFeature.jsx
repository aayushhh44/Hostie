import React from 'react'
import { Link } from 'react-router-dom';
function HomeSixHostingFeature() {
    return (
        <>
            <section className="rts-hosting-feature-two section__padding">
                <div className="container">
                    <div className="row g-40">
                        <div className="col-lg-6">
                            <div
                                className="rts-hosting-feature-two__image"
                                data-sal="slide-right"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                <img src="assets/images/hosting/hosting__feature__two.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="rts-hosting-feature-two__content">
                                <div className="rts-section__two">
                                    <h6
                                        className="sub__title"
                                        data-sal="slide-down"
                                        data-sal-delay={100}
                                        data-sal-duration={800}
                                    >
                                        feature
                                    </h6>
                                    <h2
                                        className="title"
                                        data-sal="slide-down"
                                        data-sal-delay={300}
                                        data-sal-duration={800}
                                    >
                                        Advanced Security Features
                                    </h2>
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
                                <Link
                                    to="/pricing"
                                    className="rts-btn rts-btn-secondary"
                                    data-sal="slide-down"
                                    data-sal-delay={600}
                                    data-sal-duration={800}
                                >
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

export default HomeSixHostingFeature