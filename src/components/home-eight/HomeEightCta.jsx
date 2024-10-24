import React from 'react'
import { Link } from 'react-router-dom'

function HomeEightCta ({ className }) {
    return (
        <>
            <div className={`rts-cta-two shared-page-bg ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="rts-cta-two__wrapper">
                            <div className="cta__shape" />
                            <div className="cta-content">
                                <span
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Need help choosing a plan?
                                </span>
                                <h4
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Need help? We're always here for you.
                                </h4>
                            </div>
                            <div className="cta-btn">
                                <Link to="#" className="contact__us rts-btn rts-btn-secondary">
                                    Go to Live chat Page
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeEightCta