import React from 'react'

function HomeData({ className }) {
    return (
        <>
            <div className={`rts-data-center fix section__padding ${className}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="rts-section w-790 text-center">
                            <h3 className="rts-section__title" data-sal="slide-down" data-sal-delay={300} data-sal-duration={800}>
                                Data Centers All Around the World
                            </h3>
                            <p className="rts-section__description" data-sal="slide-down" data-sal-delay={400} data-sal-duration={800} >
                                Our web hosting, WordPress hosting, and cloud hosting plans offer
                                server locations in: USA, Germany Egypt , India, Chaina, Brazil,
                                Canada, Russia, Australia and South Africa.
                            </p>
                        </div>
                    </div>
                    {/* data center content */}
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-data-center__location">
                                <img src="assets/images/data__center.png" alt="data__center" />
                                <ul className="round-shape">
                                    <li className="one">
                                        <span className="tooltip1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Canada" data-bs-custom-class="color-hostie" title="Canada" >
                                            Canada
                                        </span>
                                        <img src="assets/images/flag-01.svg" alt="" />
                                    </li>
                                    <li className="two">
                                        <span className="tolltip1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="color-hostie" title="Germany" >
                                            Germany
                                        </span>
                                        <img src="assets/images/flag-02.svg" alt="" />
                                    </li>
                                    <li className="three">
                                        <span className="tolltip1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="color-hostie" title="Russia" >
                                            Russia
                                        </span>
                                        <img src="assets/images/flag-03.svg" alt="" />
                                    </li>
                                    <li className="four">
                                        <span className="tolltip1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="color-hostie" title="USA" >
                                            USA
                                        </span>
                                        <img src="assets/images/flag-04.svg" alt="" />
                                    </li>
                                    <li className="five">
                                        <span className="tolltip1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="color-hostie" title="Egypt" >
                                            egypt
                                        </span>
                                        <img src="assets/images/flag-05.svg" alt="" />
                                    </li>
                                    <li className="six">
                                        <span className="tolltip1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="color-hostie" title="India" >
                                            india
                                        </span>
                                        <img src="assets/images/flag-06.svg" alt="" />
                                    </li>
                                    <li className="seven">
                                        <span className="tolltip1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="color-hostie" title="China" >
                                            china
                                        </span>
                                        <img src="assets/images/flag-07.svg" alt="" />
                                    </li>
                                    <li className="eight">
                                        <span className="tolltip1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="color-hostie" title="Brazil" >
                                            Brazil
                                        </span>
                                        <img src="assets/images/flag-08.svg" alt="" />
                                    </li>
                                    <li className="nine">
                                        <span className="tolltip1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="color-hostie" title="South Africa" >
                                            arfa
                                        </span>
                                        <img src="assets/images/flag-09.svg" alt="" />
                                    </li>
                                    <li className="ten">
                                        <span className="tolltip1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="color-hostie" title="Australia" >
                                            Australia
                                        </span>
                                        <img src="assets/images/flag-10.svg" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-shape">
                    <div className="rts-shape__one" />
                    <div className="rts-shape__two" />
                    <div className="rts-shape__three" />
                    <div className="rts-shape__four" />
                </div>
            </div>
        </>
    )
}

export default HomeData