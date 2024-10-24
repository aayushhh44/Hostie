import React, { useEffect } from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function SharedHostingBanner() {
    useEffect(() => {
        sal({
            threshold: 0.1,
            once: true,
        });
    }, []);
    return (
        <>
            <div className="rts-hosting-banner rts-hosting-banner-bg banner-default-height">
                <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="col-lg-12">
                            <div className="banner-area">
                                <div className="rts-hosting-banner rts-hosting-banner__content">
                                    <span
                                        className="starting__price"
                                        data-sal="slide-down"
                                        data-sal-delay={100}
                                        data-sal-duration={800}
                                    >
                                        Starting at $2.59/mo
                                    </span>
                                    <h1
                                        className="banner-title"
                                        data-sal="slide-down"
                                        data-sal-delay={300}
                                        data-sal-duration={800}
                                    >
                                        Shared Website Hosting
                                    </h1>
                                    <p
                                        className="slogan"
                                        data-sal="slide-down"
                                        data-sal-delay={400}
                                        data-sal-duration={800}
                                    >
                                        Everything you need to launch a website.
                                    </p>
                                    <div
                                        className="hosting-feature"
                                        data-sal="slide-down"
                                        data-sal-delay={500}
                                        data-sal-duration={800}
                                    >
                                        <div className="hosting-feature__single">
                                            <div className="icon-image">
                                                <img src="assets/images/banner/shared/diamond.png" alt="" />
                                            </div>
                                            <p className="feature-text">
                                                Look like a Pri- Fast, Secure, &amp; Always Up
                                            </p>
                                        </div>
                                        <div className="hosting-feature__single">
                                            <div className="icon-image">
                                                <img src="assets/images/banner/shared/wordpress.png" alt="" />
                                            </div>
                                            <p className="feature-text">
                                                Look like a Pri- Fast, Secure, &amp; Always Up
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rts-hosting-banner__image">
                                    <img src="assets/images/banner/shared/shared__hosting.svg" alt="" />
                                    <img
                                        className="shape-image one right-left"
                                        src="assets/images/banner/shared/shared__hosting-sm1.svg"
                                        alt=""
                                    />
                                    <img
                                        className="shape-image two pulsing"
                                        src="assets/images/banner/shared/shared__hosting-sm2.svg"
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

export default SharedHostingBanner