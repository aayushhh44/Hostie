import React from 'react'

function CloudHostingSupportFeature() {
    return (
        <>
            <div className="rts-support-feature section__padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xl-6">
                            <div className="support-feature-image">
                                <img
                                    src="assets/images/feature/support__feature.png"
                                    width={645}
                                    height={477}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="support-feature__content">
                                <h2
                                    className="title"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Advanced Priority Support
                                </h2>
                                <p
                                    className="description"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Cloud issues reported on chat or ticket are assigned with priority
                                    to our most experienced support agents available.
                                </p>
                                <div
                                    className="priority-content"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    <div className="single-priority">
                                        <div className="icon">
                                            <img src="assets/images/feature/cloud/p-1.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h5>Advanced expertise</h5>
                                            <p className="mb-0">By our best agents</p>
                                        </div>
                                    </div>
                                    <div className="single-priority">
                                        <div className="icon">
                                            <img src="assets/images/feature/cloud/speed-meter.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h5>Advanced expertise</h5>
                                            <p className="mb-0">By our best agents</p>
                                        </div>
                                    </div>
                                    <div className="single-priority">
                                        <div className="icon">
                                            <img src="assets/images/feature/cloud/p-2.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h5>Amazingly Fast</h5>
                                            <p className="mb-0">By our best agents</p>
                                        </div>
                                    </div>
                                    <div className="single-priority">
                                        <div className="icon">
                                            <img src="assets/images/feature/cloud/rated.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h5>Highly rated</h5>
                                            <p className="mb-0">By our best agents</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CloudHostingSupportFeature