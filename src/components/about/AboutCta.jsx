import React from 'react'
import { Link } from 'react-router-dom'

function AboutCta() {
    return (
        <>
            <div className="rts-cta-two shared-page-bg pt--120">
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
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Need help? We're always here for you.
                                </h4>
                            </div>
                            <div className="cta-btn">
                                <Link
                                    to="#"
                                    className="contact__us primary__btn btn__two secondary__bg secondary__color"
                                >
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

export default AboutCta