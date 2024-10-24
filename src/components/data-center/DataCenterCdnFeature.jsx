import React from 'react'

function DataCenterCdnFeature() {
    return (
        <>
            <div className="rts-cdn-feature pb--120">
                <div className="container">
                    <div className="row g-40  align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="cdn-images">
                                <img src="assets/images/feature/cdn.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="cdn-description">
                                <h2 className="title fw-bold">Global CDN network</h2>
                                <p className="description mb-4">
                                    SiteGround customers enjoy free in-house built CDN service that
                                    significantly speeds up the loading speed for all your site visitors
                                    across the globe With our CDN your site content is cached
                                </p>
                                <div
                                    className="feature style-two m-0"
                                    data-sal="slide-down"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                >
                                    <ul className="feature__list">
                                        <li className="feature__item">
                                            Our CDN locations includes Tokyo (Japan)
                                        </li>
                                        <li className="feature__item">
                                            Warsaw (Poland), Hamina (Finland), London (England)
                                        </li>
                                        <li className="feature__item">
                                            Madrid (Spain), Eemshaven (Netherlands), Paris (France)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DataCenterCdnFeature