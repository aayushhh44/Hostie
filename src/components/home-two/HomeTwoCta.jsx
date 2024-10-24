import React from 'react'
import { Link } from 'react-router-dom';
function HomeTwoCta() {
    return (
        <>
            <div className="rts-cta-two cultured__white">
                <div className="container">
                    <div className="row">
                        <div className="rts-cta-two__wrapper">
                            <div className="cta__shape" />
                            <div
                                className="cta-content"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                <span>Need help choosing a plan?</span>
                                <h4>Unleash Online Growth Not Budgets.</h4>
                            </div>
                            <div className="cta-btn">
                                <Link
                                    to="/contact"
                                    className="contact__us rts-btn rts-btn-secondary"
                                >
                                    contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeTwoCta