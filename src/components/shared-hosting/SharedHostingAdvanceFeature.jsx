import React from 'react'

function SharedHostingAdvanceFeature() {
    return (
        <>
            <div className="rts-hosting-feature section__padding">
                <div className="container">
                    <div className="row gy-40 justify-content-md-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="hosting-feature-image">
                                <div className="hosting-feature-image__image">
                                    <img
                                        src="assets/images/feature/feature__image.png"
                                        height={428}
                                        width={645}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="hosting-feature">
                                <h3
                                    className="hosting-feature__title font-40"
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
                                <div className="feature">
                                    <ul
                                        className="feature__list"
                                        data-sal="slide-down"
                                        data-sal-delay={400}
                                        data-sal-duration={800}
                                    >
                                        <li className="feature__item">Unlimited MySQL Databases</li>
                                        <li className="feature__item">Reseller &amp; Sub Accounts</li>
                                        <li className="feature__item">Hostie Control Panel</li>
                                        <li className="feature__item">Secure Shell (SSH) Access</li>
                                        <li className="feature__item">Full Unix Shell</li>
                                        <li className="feature__item">IPv6 Support</li>
                                        <li className="feature__item">Access to Raw Log Files</li>
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

export default SharedHostingAdvanceFeature