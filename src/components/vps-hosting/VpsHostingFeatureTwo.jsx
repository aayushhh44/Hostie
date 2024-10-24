import React from 'react'

function VpsHostingFeatureTwo() {
    return (
        <>
            <div className="rts-hosting-feature section__padding">
                <div className="container">
                    <div className="row gy-30">
                        <div className="col-lg-6 d-md-flex justify-content-md-center">
                            <div className="hosting-feature-image">
                                <div className="hosting-feature-image__image">
                                    <div className="img-one">
                                        <img
                                            src="assets/images/feature/vps__feature__small.png"
                                            height={400}
                                            alt=""
                                        />
                                    </div>
                                    <div className="img-two">
                                        <img
                                            src="assets/images/feature/vps__feature__big.png"
                                            height={400}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 d-md-flex justify-content-md-center">
                            <div className="hosting-feature">
                                <h3
                                    className="hosting-feature__title"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Shared Hosting Advanced Features
                                </h3>
                                <p
                                    className="hosting-feature__desc"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    We’ll move your first website to Cloud ways from any web host for
                                    without breaking your live site hosted on the old host.
                                </p>
                                <div
                                    className="feature"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    <ul className="feature__list">
                                        <li className="feature__item">Phusion Passenger</li>
                                        <li className="feature__item">Crontab Access</li>
                                        <li className="feature__item">Subversion Repository</li>
                                        <li className="feature__item">Access to Raw Log Files</li>
                                        <li className="feature__item">Password Protection</li>
                                        <li className="feature__item">Secure Shell (SSH)</li>
                                        <li className="feature__item">Apache or Nginx</li>
                                        <li className="feature__item">Unlimited SFTP Users</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VpsHostingFeatureTwo