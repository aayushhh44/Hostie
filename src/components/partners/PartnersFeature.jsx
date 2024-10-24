import React from 'react'

function PartnersFeature() {
    return (
        <>
            <section className="rts-feature-area partner section__padding">
                <div className="container">
                    <div className="section-inner">
                        <div className="row gy-40 align-items-center mb--120">
                            <div className="col-lg-4">
                                <div className="left-side-content">
                                    <div className="rts-section">
                                        <h2
                                            className="rts-section__title mb-0"
                                            data-sal="slide-down"
                                            data-sal-delay={100}
                                            data-sal-duration={800}
                                        >
                                            Earn Recurring Commissions
                                        </h2>
                                    </div>
                                    <div
                                        className="feature mb-0"
                                        data-sal="slide-down"
                                        data-sal-delay={300}
                                        data-sal-duration={800}
                                    >
                                        <ul className="feature__list">
                                            <li className="feature__item">
                                                Powerful and Unique Tools for Your Email Inbox
                                            </li>
                                            <li className="feature__item">
                                                Get up to 20% commissions per sale.
                                            </li>
                                            <li className="feature__item">
                                                Earn recurring commissions when your clients renew their
                                                services.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="right-side-image">
                                    <img src="assets/images/feature/dashboard.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="left-side-image">
                                    <img src="assets/images/feature/dashboard2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-side-content">
                                    <div className="rts-section">
                                        <h2
                                            className="rts-section__title mb-0"
                                            data-sal="slide-down"
                                            data-sal-delay={100}
                                            data-sal-duration={800}
                                        >
                                            Manage All Clients in One Dashboard
                                        </h2>
                                    </div>
                                    <div
                                        className="feature mb-0"
                                        data-sal="slide-down"
                                        data-sal-delay={300}
                                        data-sal-duration={800}
                                    >
                                        <ul className="feature__list">
                                            <li className="feature__item">
                                                View all clients and their services in one dashboard.
                                            </li>
                                            <li className="feature__item">
                                                Save time with bulk management. (coming soon)
                                            </li>
                                            <li className="feature__item">
                                                Monitor performance via client reporting tools. (coming soon)
                                            </li>
                                            <li className="feature__item">
                                                Use our invoicing &amp; billing system. (coming soon)
                                            </li>
                                        </ul>
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

export default PartnersFeature