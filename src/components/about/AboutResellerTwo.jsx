import React from 'react'

function AboutResellerTwo() {
    return (
        <>
            <div className="rts-about-reseller section__padding area-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hosting-info w-550 mt-md-0">
                                <h2
                                    className="hosting-info__title"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    We invest in our employees’ happiness.
                                </h2>
                                <p
                                    className="description"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Happy people are eager to grow and make the impossible possible
                                    That's why we invest in our employees' happiness.
                                </p>
                                <div
                                    className="feature"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    <ul className="feature__list gap-5">
                                        <li className="feature__item">Unlimited MySQL Databases</li>
                                        <li className="feature__item">Full Unix Shell</li>
                                        <li className="feature__item">Reseller &amp; Sub Accounts</li>
                                        <li className="feature__item">IPv6 Support</li>
                                        <li className="feature__item">Hostie Control Panel</li>
                                        <li className="feature__item">Access to Raw Log Files</li>
                                        <li className="feature__item">Secure Shell (SSH) Access</li>
                                        <li className="feature__item">Unlimited SFTP Users</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 padding-bottom-75">
                            <div className="hosting-about-image-bg" />
                            <div className="hosting-about-image">
                                <div className="img-one">
                                    <img
                                        src="assets/images/about/resell/image-3.png"
                                        width={378}
                                        height={400}
                                        alt=""
                                    />
                                </div>
                                <div className="img-two">
                                    <img
                                        src="assets/images/about/resell/image-4.png"
                                        width={247}
                                        height={347}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutResellerTwo