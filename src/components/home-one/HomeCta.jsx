import React from 'react'
import { Link } from 'react-router-dom';
function HomeCta() {
    return (
        <>
            <div className="rts-cta">
                <div className="container">
                    <div className="row">
                        <div className="rts-cta__wrapper">
                            <div className="rts-cta__left">
                                <h3
                                    className="cta__title"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Experience the Hostie Hosting Difference Today!
                                </h3>
                                <p data-sal="slide-down" data-sal-delay={400} data-sal-duration={800}>
                                    Above all else, we strive deliver outstanding customer experiences
                                    When you buy a domain name from.
                                </p>
                                <Link
                                    data-sal="slide-down"
                                    data-sal-delay={500}
                                    data-sal-duration={800}
                                    to="#"
                                    className="primary__btn secondary__bg"
                                >
                                    get started <i className="fa-regular fa-arrow-right" />
                                </Link>
                            </div>
                            <div className="rts-cta__right">
                                <div className="cta-image">
                                    <div className="cta-image__one">
                                        <img src="assets/images/cta/cta__hosting.svg" alt="" />
                                    </div>
                                    <div className="cta-image__two">
                                        <img src="assets/images/cta/cta__person.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeCta