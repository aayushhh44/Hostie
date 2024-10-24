import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function FaqBanner() {
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
                            <div className="rts-hosting-banner rts-hosting-banner__content contact__banner">
                                <span
                                    className="starting__price"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    FAQ's{" "}
                                </span>
                                <h1
                                    className="banner-title"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Frequently asked questions
                                </h1>
                                <p
                                    className="slogan"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    You can also do this by logging into a server directly, but the
                                    process requires some technical knowledge since a single mistake can
                                    break your entire site...
                                </p>
                                <div className="hosting-action">
                                    <Link to="#" className="btn__two secondary__bg secondary__color">
                                        Ask a Question <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="rts-hosting-banner__image faq">
                                <img src="assets/images/banner/faq/banner__faq__image.svg" alt="" />
                                <img
                                    className="shape one rotate-one"
                                    src="assets/images/banner/faq/banner__faq__image-sm1.svg"
                                    alt=""
                                />
                                <img
                                    className="shape two rotate-two"
                                    src="assets/images/banner/faq/banner__faq__image-sm2.svg"
                                    alt=""
                                />
                                <img
                                    className="shape three"
                                    src="assets/images/banner/faq/banner__faq__image-sm3.svg"
                                    alt=""
                                />
                                <img
                                    className="shape four"
                                    src="assets/images/banner/faq/banner__faq__image-sm4.svg"
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

export default FaqBanner