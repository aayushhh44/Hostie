import React from 'react'
import { Link } from 'react-router-dom'

function TechnologyAboutSeller() {
    return (
        <>
            <div className="rts-about-reseller section__padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hosting-info">
                                <h2
                                    className="hosting-info__title mt-0 w-450"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Automatic Scaling on Cloud
                                </h2>
                                <p
                                    className="description w-480"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    We develop unique technologies that facilitate our clients in
                                    building and managing their websites. Start with our in-house
                                    developed site control panel and go through a wide range of tools
                                    for WordPress
                                </p>
                                <Link
                                    href="/pricing"
                                    className="btn__two btn__long secondary__bg secondary__color"
                                >
                                    View Plan <i className="fa-regular fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6  padding-bottom-75">
                            <div className="hosting-about-image-bg" />
                            <div className="hosting-about-image">
                                <div className="img-one">
                                    <img
                                        src="assets/images/about/resell/image-1.png"
                                        width={378}
                                        height={400}
                                        alt=""
                                    />
                                </div>
                                <div className="img-two">
                                    <img
                                        src="assets/images/feature/scalling.jpg"
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

export default TechnologyAboutSeller