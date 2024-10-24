import React from 'react'

function CloudHostingFeature() {
    return (
        <>
            <section className="rts-cloud-feature section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="rts-section w-500">
                            <h2
                                className="title"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                Host on The Cloud to Keep Growing
                            </h2>
                        </div>
                    </div>
                    {/* feature single */}
                    <div className="row g-30">
                        <div
                            className="col-lg-4 col-md-6 col-sm-6"
                            data-sal="slide-down"
                            data-sal-delay={200}
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
                                <h4 className="title">Dedicated IP</h4>
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
                                        src="assets/images/feature/cloud/2.svg"
                                        height={50}
                                        width={60}
                                        alt=""
                                    />
                                </div>
                                <h4 className="title">Guaranteed Resources</h4>
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
                                        src="assets/images/feature/cloud/ssl.svg"
                                        height={50}
                                        width={60}
                                        alt=""
                                    />
                                </div>
                                <h4 className="title">SSL Included</h4>
                                <p className="description">
                                    If your site has outgrown the shared hosting solutions it’s time to
                                    move to the cloud.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6"
                            data-sal="slide-down"
                            data-sal-delay={300}
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
                            data-sal-delay={300}
                            data-sal-duration={800}
                        >
                            <div className="cloud-feature">
                                <div className="icon">
                                    <img
                                        src="assets/images/feature/cloud/cloud.svg"
                                        height={50}
                                        width={60}
                                        alt=""
                                    />
                                </div>
                                <h4 className="title">Daily Backups</h4>
                                <p className="description">
                                    If your site has outgrown the shared hosting solutions it’s time to
                                    move to the cloud.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6"
                            data-sal="slide-down"
                            data-sal-delay={300}
                            data-sal-duration={800}
                        >
                            <div className="cloud-feature">
                                <div className="icon">
                                    <img
                                        src="assets/images/feature/cloud/collaboration.svg"
                                        height={50}
                                        width={60}
                                        alt=""
                                    />
                                </div>
                                <h4 className="title">Collaboration Tools</h4>
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

export default CloudHostingFeature