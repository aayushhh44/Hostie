import React from 'react'

function TechnologyFeature() {
    return (
        <>
            <section className="rts-cloud-feature section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="rts-section">
                                <h3
                                    className="title mb-0"
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    High-Performance Platform
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* feature single */}
                    <div className="row g-30">
                        <div
                            className="col-lg-4 col-md-6 col-sm-6"
                            data-sal="slide-down"
                            data-sal-delay={100}
                            data-sal-duration={800}
                        >
                            <div className="cloud-feature">
                                <div className="icon">
                                    <img
                                        src="assets/images/feature/cloud/1.svg"
                                        height={50}
                                        width={60}
                                        alt=""
                                    />
                                </div>
                                <h4 className="title">Powerful Caching Technology</h4>
                                <p className="description">
                                    All hosted sites get cached, which improves their performance up to
                                    5 times!
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6"
                            data-sal="slide-down"
                            data-sal-delay={200}
                            data-sal-duration={800}
                        >
                            <div className="cloud-feature">
                                <div className="icon">
                                    <img
                                        src="assets/images/feature/cloud/php.svg"
                                        height={50}
                                        width={60}
                                        alt=""
                                    />
                                </div>
                                <h4 className="title">Ultrafast PHP Setup</h4>
                                <p className="description">
                                    We developed a custom PHP setup that cuts the TTFB (time to first
                                    byte) and makes
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6"
                            data-sal="slide-down"
                            data-sal-delay={100}
                            data-sal-duration={800}
                        >
                            <div className="cloud-feature">
                                <div className="icon">
                                    <img
                                        src="assets/images/feature/cloud/sql.svg"
                                        height={50}
                                        width={60}
                                        alt=""
                                    />
                                </div>
                                <h4 className="title">Custom MySQL Setup</h4>
                                <p className="description">
                                    If your site has outgrown the shared hosting solutions it’s time to
                                    move to the cloud.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6"
                            data-sal="slide-down"
                            data-sal-delay={200}
                            data-sal-duration={800}
                        >
                            <div className="cloud-feature">
                                <div className="icon">
                                    <img
                                        src="assets/images/feature/cloud/resell.svg"
                                        height={50}
                                        width={60}
                                        alt=""
                                    />
                                </div>
                                <h4 className="title">White-label Reselling</h4>
                                <p className="description">
                                    If your site has outgrown the shared hosting solutions it’s time to
                                    move to the cloud.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6"
                            data-sal="slide-down"
                            data-sal-delay={100}
                            data-sal-duration={800}
                        >
                            <div className="cloud-feature">
                                <div className="icon">
                                    <img
                                        src="assets/images/feature/cloud/backup.svg"
                                        height={50}
                                        width={60}
                                        alt=""
                                    />
                                </div>
                                <h4 className="title">Automated Onsite Backups</h4>
                                <p className="description">
                                    If your site has outgrown the shared hosting solutions it’s time to
                                    move to the cloud.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6"
                            data-sal="slide-down"
                            data-sal-delay={200}
                            data-sal-duration={800}
                        >
                            <div className="cloud-feature">
                                <div className="icon">
                                    <img
                                        src="assets/images/feature/cloud/speed-meter-2.svg"
                                        height={50}
                                        width={60}
                                        alt=""
                                    />
                                </div>
                                <h4 className="title">Top WordPress Performance</h4>
                                <p className="description">
                                    If your site has outgrown the shared hosting solutions it’s time to
                                    move to the cloud.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TechnologyFeature