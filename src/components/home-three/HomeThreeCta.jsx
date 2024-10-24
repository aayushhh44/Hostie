import React from 'react'
import { Link } from 'react-router-dom'

function HomeThreeCta() {
    return (
        <>
            <div className="rts-cta home-three">
                <div className="container">
                    <div className="row">
                        <div className="rts-cta__wrapper align-items-center">
                            <div className="rts-cta__left">
                                <h3 className="cta__title">Sign up for web hosting today!</h3>
                            </div>
                            <div className="rts-cta__right">
                                <Link to="/sign-up" className="rts-btn">
                                    Sign Now <i className="fa-solid fa-chevron-right" />
                                </Link>
                            </div>
                            <div className="cta-shape-area">
                                <img src="assets/images/cta/cta__shape.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeThreeCta