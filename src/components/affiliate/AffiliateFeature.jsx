import React from 'react'
import { Link } from 'react-router-dom'

function AffiliateFeature() {
    return (
        <>
            <div className="rts-affiliate alice__blue section__padding">
                <div className="container">
                    <div className="row align-items-center g-30">
                        <div className="col-lg-5">
                            <div className="become__affiliate__text">
                                <h3 className="title">Become an Affiliate in Three Simple Steps</h3>
                                <p>
                                    You don’t need to fill long forms or wait for any approval call.
                                    Join the hostie affiliate program flawlessly.
                                </p>
                                <Link
                                    to="/pricing"
                                    className="rts-btn btn__long primary__bg white__color"
                                >
                                    View Plan <i className="fa-regular fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="become__affiliate">
                                <div className="become__affiliate__content">
                                    <div className="single">
                                        <div className="icon">
                                            <img src="assets/images/feature/intersect.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4>Join</h4>
                                            <p className="mb-0">
                                                Sign up for a Hostie account and fill in the required details.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single">
                                        <div className="icon">
                                            <img src="assets/images/feature/mike.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4>promote</h4>
                                            <p className="mb-0">
                                                Sign up for a Hostie account and fill in the required details.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single">
                                        <div className="icon">
                                            <img src="assets/images/feature/earn-api.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4>Earn</h4>
                                            <p className="mb-0">
                                                Sign up for a Hostie account and fill in the required details.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="become__affiliate__image">
                                    <img
                                        src="assets/images/feature/affilate-image.png"
                                        height={400}
                                        width={310}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AffiliateFeature