import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function BusinessMailBanner() {
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
                        <div className="banner-area">
                            <div className="rts-hosting-banner rts-hosting-banner__content business-mail-banner">
                                <span
                                    className="starting__price"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Business Mail
                                </span>
                                <h1
                                    className="banner-title"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Professional Business Email
                                </h1>
                                <p
                                    className="slogan"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Buy business email addresses from Titan. Look professional and build
                                    trust for your brand.
                                </p>
                                <div className="hosting-action">
                                    <Link
                                        to="/pricing"
                                        className="btn__two secondary__bg secondary__color"
                                    >
                                        Start Now <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="rts-hosting-banner__image business-mail__image">
                                <img
                                    src="assets/images/banner/banner__business__mail__image.svg"
                                    alt=""
                                />
                                <img
                                    className="shape-image one"
                                    src="assets/images/banner/banner__business__mail__image-sm1.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BusinessMailBanner