import React from 'react'
import { Link } from 'react-router-dom'

function WordPressHostingPlugins() {
    return (
        <>
            <div className="rts-hosting-feature-four wordpress pt--120 pb--120">
                <div className="container">
                    <div className="rts-section ">
                        <div className="rts-section__two">
                            <h3
                                className="title font-40 mb-0"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                Top WordPress Plugins
                            </h3>
                        </div>
                        <div className="rts-section-description">
                            <p
                                className="description"
                                data-sal="slide-down"
                                data-sal-delay={200}
                                data-sal-duration={800}
                            >
                                WordPress offers a robust plugin system that makes it <br /> easy to
                                add the functionality
                            </p>
                        </div>
                    </div>
                    {/* feature lsit */}
                    <div
                        className="row g-30 justify-content-md-center"
                        data-sal="slide-down"
                        data-sal-delay={100}
                        data-sal-duration={800}
                    >
                        <div className="col-lg-3 col-md-5 col-sm-6">
                            <div className="feature__single">
                                <div className="feature__single--icon">
                                    <img src="assets/images/feature/plugin-01.svg" alt="" />
                                </div>
                                <Link to="#" className="feature__single--title">
                                    BbPress
                                </Link>
                                <p className="feature__single--description">
                                    bbPress adds forum capability to existing WordPress site.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6">
                            <div className="feature__single">
                                <div className="feature__single--icon">
                                    <img src="assets/images/feature/plugin-02.svg" alt="" />
                                </div>
                                <Link to="#" className="feature__single--title">
                                    BuddyPress
                                </Link>
                                <p className="feature__single--description">
                                    Add social networking right into WordPress site.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6">
                            <div className="feature__single">
                                <div className="feature__single--icon">
                                    <img src="assets/images/feature/plugin-03.svg" alt="" />
                                </div>
                                <Link to="#" className="feature__single--title">
                                    WooCommerce
                                </Link>
                                <p className="feature__single--description">
                                    Easily eCommerce functionality to site with woocommerce
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6">
                            <div className="feature__single">
                                <div className="feature__single--icon">
                                    <img src="assets/images/feature/plugin-04.svg" alt="" />
                                </div>
                                <Link to="#" className="feature__single--title">
                                    Contact Form 7
                                </Link>
                                <p className="feature__single--description">
                                    Makes it easy for your visitors to email you from your site!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WordPressHostingPlugins