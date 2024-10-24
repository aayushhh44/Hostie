import React, { useEffect } from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function DataCenterBanner() {
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
                            <div className="rts-hosting-banner rts-hosting-banner__content w-530">
                                <span
                                    className="starting__price"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Data Center
                                </span>
                                <h1
                                    className="banner-title"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Modern And Green Data Centers
                                </h1>
                                <div
                                    className="feature mb-0"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    <ul className="feature__list">
                                        <li className="feature__item">
                                            High redundancy &amp; availability
                                        </li>
                                        <li className="feature__item">
                                            Fast connectivity and low latency
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rts-hosting-banner__image vps">
                                <img src="assets/images/banner/banner__vps__image.svg" alt="" />
                                <img
                                    className="shape-image one top-bottom2"
                                    src="assets/images/banner/banner__vps__image-sm1.svg"
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

export default DataCenterBanner