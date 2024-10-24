import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HomeNineBanner() {
    useEffect(() => {
		sal({
			threshold: 0.1,
			once: true,
		});
	}, []);
    return (
        <>
            <section className="rts-hero wp__banner">
                <div className="rts-hero__video">
                    <video
                        loop
                        muted
                        autoPlay
                        src="assets/images/video/wp-hosting.mp4"
                    />
                </div>
                <div className="container">
                    <div className="row justify-content-center align-items-end position-relative">
                        <div className="col-lg-6">
                            <div className="rts-hero__content">
                                <h1
                                    className="heading"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Better Speed For WordPress Sites.
                                </h1>
                                <p
                                    className="description"
                                    data-sal="slide-down"
                                    data-sal-delay={400}
                                    data-sal-duration={800}
                                >
                                    Developing smart solutions in-house and adopting the latest speed
                                    and security technologies is our passion.
                                </p>
                                <div
                                    className="rts-hero__content--group"
                                    data-sal="slide-down"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                    <Link to="/pricing" className="primary__btn white__bg">
                                        Get Started <i className="fa-regular fa-long-arrow-right" />
                                    </Link>
                                    <Link to="/pricing-two" className="btn__zero plan__btn">
                                        Plans &amp; Pricing{" "}
                                        <i className="fa-regular fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeNineBanner