import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
function AboutCounterUp() {
    const { ref, inView } = useInView({
        triggerOnce: true,  // Trigger only once
        threshold: 0.5,     // Trigger when 50% of the component is visible
      });
    return (
        <>
            <div className="rts-counter-up-area">
                <div className="container">
                    <ul className="counter-up-area-inner">
                        <li className="counter-up-list">
                            <div className="icon">
                                <img src="assets/images/about/counter-01.svg" alt="" />
                            </div>
                            <div className="counter-wrapper">
                                <div ref={ref} className={`counter-container ${inView ? 'animated' : ''}`}>
                                    {inView && (
                                        <h2 className="counter title-main">
                                            <CountUp end={200} delay={0.01} duration={1} />
                                            <span>+</span>
                                        </h2>
                                    )}
                                </div>
                                <p className="desc">People choose A2</p>
                            </div>
                        </li>
                        <li className="counter-up-list">
                            <div className="icon">
                                <img src="assets/images/about/counter-02.svg" alt="" />
                            </div>
                            <div className="counter-wrapper">
                                <div ref={ref} className={`counter-container ${inView ? 'animated' : ''}`}>
                                    {inView && (
                                        <h2 className="counter title-main">
                                            <CountUp end={125} delay={0.01} duration={1} />
                                            <span>k</span>
                                        </h2>
                                    )}
                                </div>
                                <p className="desc">Active Services helping</p>
                            </div>
                        </li>
                        <li className="counter-up-list">
                            <div className="icon">
                                <img src="assets/images/about/counter-03.svg" alt="" />
                            </div>
                            <div className="counter-wrapper">
                                <div ref={ref} className={`counter-container ${inView ? 'animated' : ''}`}>
                                    {inView && (
                                        <h2 className="counter title-main">
                                            <CountUp end={110} delay={0.01} duration={1} />
                                            <span>k</span>
                                        </h2>
                                    )}
                                </div>
                                <p className="desc">People utilizing a2</p>
                            </div>
                        </li>
                        <li className="counter-up-list">
                            <div className="icon">
                                <img src="assets/images/about/counter-04.svg" alt="" />
                            </div>
                            <div className="counter-wrapper">
                                <div ref={ref} className={`counter-container ${inView ? 'animated' : ''}`}>
                                    {inView && (
                                        <h2 className="counter title-main">
                                            <CountUp end={17} delay={0.01} duration={1} />
                                            <span>m+</span>
                                        </h2>
                                    )}
                                </div>
                                <p className="desc">Domains management</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default AboutCounterUp