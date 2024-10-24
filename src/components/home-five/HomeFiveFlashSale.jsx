import React from 'react'
import { Link } from 'react-router-dom';
function HomeFiveFlashSale() {
    return (
        <>
            <div className="rts-hosting-flash-sale">
                <div className="container">
                    <div className="section-inner">
                        <div className="content">
                            <h4
                                className="title"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                Hosting Flash Sale
                            </h4>
                            <p
                                className="desc"
                                data-sal="slide-down"
                                data-sal-delay={200}
                                data-sal-duration={800}
                            >
                                Web Hosting, Domain Name and Hosting Center Solutions
                            </p>
                            <div
                                className="button-area"
                                data-sal="slide-down"
                                data-sal-delay={300}
                                data-sal-duration={800}
                            >
                                <Link to="/pricing" className="btn__two primary__btn">
                                    See Deals <i className="fa-regular fa-chevron-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="shape-with-content">
                            <div className="shape-discount-area one">
                                <div className="content">
                                    <p className="tag">For a Limited time</p>
                                    <h4 className="title">
                                        65% <br />
                                        Off
                                    </h4>
                                    <p className="desc">Hosting</p>
                                </div>
                            </div>
                            <div className="shape-discount-area two">
                                <div className="content">
                                    <p className="tag">For a Limited time</p>
                                    <h4 className="title">
                                        91% <br />
                                        Off
                                    </h4>
                                    <p className="desc">Domains</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFiveFlashSale