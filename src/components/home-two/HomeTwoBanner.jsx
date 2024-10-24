import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function HomeTwoBanner() {
    useEffect(() => {
		sal({
			threshold: 0.1,
			once: true,
		});
	}, []);
    return (
        <>
            <section className="rts-hero-two rts-hero-two__bg">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-xl-6 col-lg-7 col-md-9 order-md-2 order-lg-0">
                            <div className="rts-hero-two__content">
                                <h1
                                    className="title"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Unleash the Power of Managed Hostic <br />
                                    <span>Cloud Hosting</span>
                                    <span className="stroke__line">
                                        <svg
                                            width={248}
                                            height={13}
                                            viewBox="0 0 248 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M118.304 3.8159C116.14 2.34825 123.513 3.87905 126.117 3.91894C135.696 4.06567 145.243 3.73724 154.819 3.44894C179.429 2.70803 204.067 2.81446 228.684 2.51727C234.435 2.44785 240.151 2.50113 245.891 2.76896C247.959 2.86548 241.754 2.55069 239.683 2.52582C200.812 2.05903 161.795 4.73046 122.936 5.74889C85.4734 6.73076 47.9945 7.29163 10.5357 8.45585C7.8729 8.53862 -0.0345717 8.46058 2.56289 9.04941C10.0209 10.7401 19.2147 10.5874 26.6387 10.7577C75.2897 11.8741 124.135 9.09372 172.798 8.47287C192.126 8.22629 211.458 7.83336 230.784 7.60513"
                                                stroke="white"
                                                strokeWidth={3}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </span>
                                </h1>
                                <div
                                    className="rts-hero-two__content--btn"
                                    data-sal="slide-down"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                    <Link
                                        to="/pricing"
                                        className="rts-btn btn__long secondary__bg secondary__color"
                                    >
                                        get started
                                        <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                    <Link
                                        to="/pricing-two"
                                        className="rts-btn btn__long border__white white__color"
                                    >
                                        start free
                                        <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                <div
                                    className="terms"
                                    data-aos="fade-down"
                                    data-sal="slide-down"
                                    data-sal-delay={600}
                                    data-sal-duration={800}
                                >
                                    <img src="assets/images/banner/cloud--lightning.svg" alt="" />
                                    <span>*3-day trial without credit card</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-5 col-md-10">
                            <div className="rts-hero-two__images mobile-margin-top-100">
                                <img
                                    src="assets/images/banner/two/hero__two__illustration.svg"
                                    alt=""
                                />
                                <img
                                    className="shape-image one left-right-top-bottom"
                                    src="assets/images/banner/two/hero__two__illustration-sm1.svg"
                                    alt=""
                                />
                                <img
                                    className="shape-image two"
                                    src="assets/images/banner/two/hero__two__illustration-sm2.svg"
                                    alt=""
                                />
                                <img
                                    className="shape-image three"
                                    src="assets/images/banner/two/hero__two__illustration-sm3.svg"
                                    alt=""
                                />
                                <img
                                    className="shape-image four"
                                    src="assets/images/banner/two/hero__two__illustration-sm4.svg"
                                    alt=""
                                />
                                <img
                                    className="shape-image five"
                                    src="assets/images/banner/two/hero__two__illustration-sm5.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape">
                    <div className="shape__one">
                        <img src="assets/images/banner/banner__two__shape.svg" alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeTwoBanner