import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function ContactBanner() {
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
                    <div className="row">
                        <div className="banner-area">
                            <div className="rts-hosting-banner rts-hosting-banner__content w-530 contact__banner">
                                <span className="starting__price">Blog &amp; Article </span>
                                <h1 className="banner-title">Contact Us</h1>
                                <p className="slogan">
                                    You can also do this by logging into a server directly, but the
                                    process requires some technical knowledge since a single mistake can
                                    break your entire site...
                                </p>
                                <div className="hosting-action">
                                    <Link to="#" className="btn__two secondary__bg secondary__color">
                                        View Details <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="rts-hosting-banner__image contact">
                                <img src="assets/images/banner/banner__contact__image.svg" alt="" />
                                <img
                                    className="shape one"
                                    src="assets/images/banner/banner__contact__image-sm1.svg"
                                    alt=""
                                />
                                <img
                                    className="shape two top-bottom2"
                                    src="assets/images/banner/banner__contact__image-sm2.svg"
                                    alt=""
                                />
                                <img
                                    className="shape three"
                                    src="assets/images/banner/banner__contact__image-sm3.svg"
                                    alt=""
                                />
                                <img
                                    className="shape four left-right2"
                                    src="assets/images/banner/banner__contact__image-sm4.svg"
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

export default ContactBanner