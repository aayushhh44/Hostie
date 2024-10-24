import React from 'react'

function HomeTenWhyChoose() {
    return (
        <>
            <section className="rts-whychoose section__padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 order-change">
                            <div className="rts-whychoose__content">
                                <h3
                                    className="rts-whychoose__content--title sal-animate"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Why Choose MERN Hosting for Your Hosting Needs
                                </h3>
                                {/* single content*/}
                                <div
                                    className="single sal-animate"
                                    data-sal="slide-right"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    <div className="single__image">
                                        <img src="assets/images/icon/speed.svg" alt="" />
                                    </div>
                                    <div className="single__content">
                                        <h6>Up To 20xFaster Turbo</h6>
                                        <p>
                                            That means better SEO rankings, lower bounce rates &amp; higher
                                            conversion rates!
                                        </p>
                                    </div>
                                </div>
                                {/* single content*/}
                                <div
                                    className="single sal-animate"
                                    data-sal="slide-right"
                                    data-sal-delay={400}
                                    data-sal-duration={800}
                                >
                                    <div className="single__image bg1">
                                        <img src="assets/images/icon/support.svg" alt="" />
                                    </div>
                                    <div className="single__content">
                                        <h6>24/7 Expert Support</h6>
                                        <p>
                                            Our knowledgeable and friendly support team is available
                                            24/7/365 to help!
                                        </p>
                                    </div>
                                </div>
                                {/* single content*/}
                                <div
                                    className="single sal-animate"
                                    data-sal="slide-right"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                    <div className="single__image">
                                        <img src="assets/images/icon/money-back.svg" alt="" />
                                    </div>
                                    <div className="single__content">
                                        <h6>Money-Back Guarantee</h6>
                                        <p>
                                            Give our high-speed hosting service a try completely risk-free!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="rts-whychoose__image">
                                <img src="assets/images/whychoose.svg" alt="" />
                                <img
                                    src="assets/images/paper-plane.svg"
                                    alt=""
                                    className="shape one bottom-top"
                                />
                                <img
                                    src="assets/images/wifi.svg"
                                    alt=""
                                    className="shape two right-left"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-shape">
                    <div className="rts-shape__one" />
                </div>
            </section>

        </>
    )
}

export default HomeTenWhyChoose