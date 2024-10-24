import React, {useEffect} from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function HomeEightBanner() {
    useEffect(() => {
		sal({
			threshold: 0.1,
			once: true,
		});
	}, []);
    return (
        <>
            <section className="rts-hero cloud-banner">
                <div className="container">
                    <div className="row align-items-end position-relative">
                        <div className="col-lg-7">
                            <div className="rts-hero__content w-570">
                                <h6
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    <img src="assets/images/icon/cloud-3.svg" alt="" />
                                    30% Discount first month purchase
                                </h6>
                                <h1
                                    className="heading"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Experience Seamless <span>Cloud Hosting</span> Solutions
                                </h1>
                                <p className="rts-hero__content--description mt--10">
                                    "Discover our cutting-edge cloud hosting solutions designed to
                                    elevate your online presence. With lightning-fast performance,
                                    unparalleled reliability, and scalable resources.
                                </p>
                                <div
                                    className="hosting-feature sal-animate"
                                    data-sal="slide-down"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                    <div className="hosting-feature__single">
                                        <div className="icon-image">
                                            <img src="assets/images/icon/white-lavel.svg" alt="" />
                                        </div>
                                        <p className="feature-text">White-label Reselling</p>
                                    </div>
                                    <div className="hosting-feature__single">
                                        <div className="icon-image">
                                            <img src="assets/images/icon/quality.svg" alt="" />
                                        </div>
                                        <p className="feature-text">Guaranteed Resources</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeEightBanner