import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
function HomeFiveHostingFeatureTwo() {
    const { ref, inView } = useInView({
        triggerOnce: true,  // Trigger only once
        threshold: 0.5,     // Trigger when 50% of the component is visible
      });
    return (
        <>
            <div className="rts-hosting-feature-five pt--120 pb--120">
                <div className="container">
                    <div className="section-inner">
                        <div className="row g-30 justify-content-md-center align-items-center">
                            <div className="col-lg-6 col-md-10 col-xl-5">
                                <div className="rts-section section-style-two">
                                    <div className="rts-section__two">
                                        <h2 className="title mb-0">What Makes Hostie So Different</h2>
                                    </div>
                                    <div className="rts-section-description">
                                        <p className="description">
                                            With over 20 years of hosting experience, we focus on successful
                                            sites for web designers.
                                        </p>
                                    </div>
                                </div>
                                <ul className="feature-list-area">
                                    <li className="list-wrapper">
                                        <div className="icon">
                                            <img src="assets/images/feature/feature-05.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">99% Uptime Guarantee</h4>
                                            <p className="desc">
                                                An uptime guarantee is a commitment made by a service provider
                                                typically in the hosting.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="list-wrapper">
                                        <div className="icon">
                                            <img src="assets/images/feature/feature-06.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Safe and Secured Lifetime</h4>
                                            <p className="desc">
                                                An uptime guarantee is a commitment made by a service provider
                                                typically in the hosting.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="list-wrapper">
                                        <div className="icon">
                                            <img src="assets/images/feature/feature-07.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Dedicated Support 24/7</h4>
                                            <p className="desc">
                                                An uptime guarantee is a commitment made by a service provider
                                                typically in the hosting.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-10 col-xl-6 offset-xl-1">
                                <div className="right-side-image">
                                    <img src="assets/images/feature/feature__image-3.png" alt="" />
                                    <div className="image-shape-content">
                                        <img
                                            src="assets/images/feature/feature__image-small.png"
                                            alt=""
                                        />
                                        <div className="img-content">
                                            <div ref={ref} className={`counter-container ${inView ? 'animated' : ''}`}>
                                                {inView && (
                                                    <h3 className="counter">
                                                        <CountUp end={520} delay={0.01} duration={1} />
                                                        <span>k+</span>
                                                    </h3>
                                                )}
                                            </div>
                                            <p>Supercharged Websites</p>
                                            <img
                                                src="assets/images/feature/crystal.svg"
                                                alt=""
                                                className="shape-img"
                                            />
                                        </div>
                                    </div>
                                    <img
                                        src="assets/images/feature/crystal-2.svg"
                                        alt=""
                                        className="shape-img2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="feature-shape-img2"
                    src="assets/images/testimonials/bg-shape-3.svg"
                    alt=""
                />
                <img
                    src="assets/images/feature/feature-bg-shape.svg"
                    alt=""
                    className="feature-shape-img"
                />
            </div>
        </>
    )
}

export default HomeFiveHostingFeatureTwo