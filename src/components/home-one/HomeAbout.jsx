import React from 'react'
function HomeAbout() {
    return (
        <>
            <div className="rts-about position-relative section__padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="rts-about__image">
                                <img src="assets/images/about/about-big.png" alt="" />
                                <img src="assets/images/about/about-shape-01.svg" alt="" className="shape one right-left" />
                                <img src="assets/images/about/about-shape-02.svg" alt="" className="shape two" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="rts-about__content">
                                <h3 data-sal="slide-down" data-sal-delay={300} data-sal-duration={800} >
                                    We build Our Business For Your Success.
                                </h3>
                                <p className="description" data-sal="slide-down" data-sal-delay={400} data-sal-duration={800} >
                                    Whether you need a simple blog, want to highlight your business,
                                    sell products through an eCommerce.
                                </p>
                                <div className="rts-about__content--single" data-sal="slide-down" data-sal-delay={500} data-sal-duration={800} >
                                    <div className="image">
                                        <img src="assets/images/about/01.svg" alt="" />
                                    </div>
                                    <div className="description">
                                        <h6>Web Hosting</h6>
                                        <p>
                                            The most popular hosting plan available and comes at one of the
                                            most affordable price points.
                                        </p>
                                    </div>
                                </div>
                                <div className="rts-about__content--single" data-sal="slide-down" data-sal-delay={600} data-sal-duration={800} >
                                    <div className="image bg-2">
                                        <img src="assets/images/about/02.svg" alt="" />
                                    </div>
                                    <div className="description">
                                        <h6>Managed WordPress Hosting</h6>
                                        <p>
                                            Our Managed WordPress Hosting gives you speed and performance
                                            with a full set of features.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-about-shape" />
            </div>
        </>
    )
}

export default HomeAbout
