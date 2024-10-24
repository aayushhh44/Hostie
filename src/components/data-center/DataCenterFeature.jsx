import React from 'react'

function DataCenterFeature() {
    return (
        <div>
            <section className="rts-feature-six section__padding business">
                <div className="container">
                    <div className="row">
                        <div className="rts-section text-center">
                            <h2
                                className="rts-section__title"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                Hostie Email Key Features
                            </h2>
                            <p
                                className="rts-section__description"
                                data-sal="slide-down"
                                data-sal-delay={300}
                                data-sal-duration={800}
                            >
                                Powerful and Unique Tools for Your Email Inbox
                            </p>
                        </div>
                    </div>
                    <div className="row gy-30 justify-content-sm-center">
                        <div
                            className="col-lg-3 col-md-6 col-sm-10"
                            data-sal="slide-down"
                            data-sal-delay={500}
                            data-sal-duration={800}
                        >
                            <div className="single__feature">
                                <div className="single__feature--box text-center">
                                    <div className="single__feature--box-icon m-auto">
                                        <img src="assets/images/feature/feature-12.svg" alt="" />
                                    </div>
                                    <h5 className="single__feature--box-title">High redundancy</h5>
                                    <p className="single__feature--box-description">
                                        Maintain and access all of your accounts in one place.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-10"
                            data-sal="slide-down"
                            data-sal-delay={600}
                            data-sal-duration={800}
                        >
                            <div className="single__feature">
                                <div className="single__feature--box text-center">
                                    <div className="single__feature--box-icon m-auto">
                                        <img src="assets/images/feature/feature-13.svg" alt="" />
                                    </div>
                                    <h5 className="single__feature--box-title">
                                        Multi-layered security
                                    </h5>
                                    <p className="single__feature--box-description">
                                        So your conversations continue no matter where you are.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-10"
                            data-sal="slide-down"
                            data-sal-delay={700}
                            data-sal-duration={800}
                        >
                            <div className="single__feature">
                                <div className="single__feature--box text-center">
                                    <div className="single__feature--box-icon m-auto">
                                        <img src="assets/images/feature/feature-14.svg" alt="" />
                                    </div>
                                    <h5 className="single__feature--box-title">
                                        Green-friendly hosting
                                    </h5>
                                    <p className="single__feature--box-description">
                                        Don't start from scratch: bring along existing emails
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-10"
                            data-sal="slide-down"
                            data-sal-delay={800}
                            data-sal-duration={800}
                        >
                            <div className="single__feature">
                                <div className="single__feature--box text-center">
                                    <div className="single__feature--box-icon m-auto">
                                        <img src="assets/images/feature/feature-15.svg" alt="" />
                                    </div>
                                    <h5 className="single__feature--box-title">Fast connectivity</h5>
                                    <p className="single__feature--box-description">
                                        Mistakes happen and you can fix them. Undo a sent email
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default DataCenterFeature