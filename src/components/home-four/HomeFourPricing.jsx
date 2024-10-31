import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function HomeFourPricing() {
    const [activeTab, setActiveTab] = useState("monthly");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const [showMoreFeatures, setShowMoreFeatures] = useState(false);

    const handleToggle = () => {
        setShowMoreFeatures(!showMoreFeatures);
    };
    return (
        <>
            <div className="rts-pricing-plan alice__blue section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="rts-section w-500 text-center">
                            <h2
                                className="rts-section__title"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
                                Choose Hosting Plan
                            </h2>
                            <p
                                className="rts-section__description"
                                data-sal="slide-down"
                                data-sal-delay={200}
                                data-sal-duration={800}
                            >
                                Globally incubate next-generation e-services via state of the art
                                technology.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-5">
                                <div className="rts-pricing-plan__tab plan__tab">
                                    <div className="tab__button">
                                        <div className="tab__button__item">
                                            <button
                                                className={`tab__price ${activeTab === 'monthly' ? 'active' : ''}`}
                                                onClick={() => handleTabClick('monthly')}
                                            >
                                                monthly
                                            </button>
                                            <button
                                                className={`tab__price ${activeTab === 'yearly' ? 'active' : ''}`}
                                                onClick={() => handleTabClick('yearly')}
                                            >
                                                yearly
                                            </button>
                                        </div>
                                    </div>
                                    <div className="discount">
                                        <span className="line">
                                            <img
                                                src="assets/images/pricing/offer__vactor.svg"
                                                height={20}
                                                width={85}
                                                alt=""
                                            />
                                        </span>
                                        <p>20% save</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* PRICING PLAN */}
                        <div className={`price__content ${activeTab === "monthly" ? "open" : ""}`}
                            id="monthly"
                            style={{ display: activeTab === "monthly" ? "block" : "none" }}>
                            <div className="row g-30 monthly">
                                {/* single card */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card-plan">
                                        <div className="card-plan__package">
                                            <div className="icon">
                                                <img
                                                    src="assets/images/pricing/basic.svg"
                                                    height={30}
                                                    width={30}
                                                    alt=""
                                                />
                                            </div>
                                            <h4 className="package__name">Basic</h4>
                                        </div>
                                        <p className="card-plan__desc">Everything need to your website</p>
                                        <div className="card-plan__offer">
                                            <span className="past-price">$12</span>
                                            <span className="offer-given">Save 20%</span>
                                        </div>
                                        <h5 className="card-plan__price">
                                            <sup>$</sup> 10 <sub>/ month</sub>
                                        </h5>
                                        <div className="card-plan__cartbtn">
                                            <Link to="#">add to cart</Link>
                                        </div>
                                        <p className="card-plan__renew-price">
                                            $ 7.99 /mo when you renew
                                        </p>
                                        <div className="card-plan__feature">
                                            <ul className="card-plan__feature--list">
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 1 Website
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Explore, discover, and learn on our innovative and informative website."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Standard Performance
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our standard performance solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 24/7/365 Support
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides reliable 24/7 support for your hosting needs, ensuring assistance whenever you require help."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Free Email
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech offers complimentary email services, empowering your online communication with reliable and secure free email solutions."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides unlimited bandwidth, ensuring seamless data transfer for your website's optimal performance and user experience."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> 100 GB SSD Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Elevate your online presence with Zouz Tech, offering unlimited bandwidth for your domain, ensuring optimal performance and seamless data flow."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 99.9% Uptime
                                                        Guarantee
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Web Application
                                                        Firewall
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className={`card-plan__feature--list-trigered ${showMoreFeatures ? 'active' : ''}`} onClick={handleToggle}>
                                                    <span className="text">
                                                        {showMoreFeatures ? 'See Less Features' : 'More Features'} <i className={`fa-sharp fa-regular fa-chevron-${showMoreFeatures ? 'up' : 'down'}`}></i>
                                                    </span>
                                                </li>
                                            </ul>
                                            {showMoreFeatures && (
                                                <ul className="card-plan__feature--list more__feature" style={{ display: 'flex' }}>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech offers generous hosting with 100GB SSD storage, providing ample space for your data and ensuring high-performance storage solutions."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 99.9% Uptime Guarantee</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-xmark"></i> Web Application Firewall</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* single card end */}
                                {/* single card */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card-plan">
                                        <div className="card-plan__package">
                                            <div className="icon">
                                                <img
                                                    src="assets/images/pricing/premium.svg"
                                                    height={30}
                                                    width={30}
                                                    alt=""
                                                />
                                            </div>
                                            <h4 className="package__name">Premium</h4>
                                        </div>
                                        <p className="card-plan__desc">Level-up more power features</p>
                                        <div className="card-plan__offer">
                                            <span className="past-price">$20.664</span>
                                            <span className="offer-given">Save 20%</span>
                                        </div>
                                        <h5 className="card-plan__price">
                                            <sup>$</sup> 17.22 <sub>/ month</sub>
                                        </h5>
                                        <div className="card-plan__cartbtn">
                                            <Link to="#">add to cart</Link>
                                        </div>
                                        <p className="card-plan__renew-price">
                                            $ 7.99 /mo when you renew
                                        </p>
                                        <div className="card-plan__feature">
                                            <ul className="card-plan__feature--list">
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 1 Website
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Explore, discover, and learn on our innovative and informative website."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Standard Performance
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our standard performance solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 24/7/365 Support
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides reliable 24/7 support for your hosting needs, ensuring assistance whenever you require help."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Free Email
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech offers complimentary email services, empowering your online communication with reliable and secure free email solutions."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides unlimited bandwidth, ensuring seamless data transfer for your website's optimal performance and user experience."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> 100 GB SSD Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Elevate your online presence with Zouz Tech, offering unlimited bandwidth for your domain, ensuring optimal performance and seamless data flow."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 99.9% Uptime
                                                        Guarantee
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Web Application
                                                        Firewall
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className={`card-plan__feature--list-trigered ${showMoreFeatures ? 'active' : ''}`} onClick={handleToggle}>
                                                    <span className="text">
                                                        {showMoreFeatures ? 'See Less Features' : 'More Features'} <i className={`fa-sharp fa-regular fa-chevron-${showMoreFeatures ? 'up' : 'down'}`}></i>
                                                    </span>
                                                </li>
                                            </ul>
                                            {showMoreFeatures && (
                                                <ul className="card-plan__feature--list more__feature" style={{ display: 'flex' }}>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech offers generous hosting with 100GB SSD storage, providing ample space for your data and ensuring high-performance storage solutions."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 99.9% Uptime Guarantee</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-xmark"></i> Web Application Firewall</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* single card end */}
                                {/* single card */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card-plan active">
                                        <div className="popular-tag">most popular</div>
                                        <div className="card-plan__package">
                                            <div className="icon">
                                                <img
                                                    src="assets/images/pricing/business.svg"
                                                    height={30}
                                                    width={30}
                                                    alt=""
                                                />
                                            </div>
                                            <h4 className="package__name">Business</h4>
                                        </div>
                                        <p className="card-plan__desc">Everything need to your website</p>
                                        <div className="card-plan__offer">
                                            <span className="past-price">$24.03</span>
                                            <span className="offer-given">Save 20%</span>
                                        </div>
                                        <h5 className="card-plan__price">
                                            <sup>$</sup> 22.00 <sub>/ month</sub>
                                        </h5>
                                        <div className="card-plan__cartbtn">
                                            <Link to="#">add to cart</Link>
                                        </div>
                                        <p className="card-plan__renew-price">
                                            $ 7.99 /mo when you renew
                                        </p>
                                        <div className="card-plan__feature">
                                            <ul className="card-plan__feature--list">
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 1 Website
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Explore, discover, and learn on our innovative and informative website."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Standard Performance
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our standard performance solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 24/7/365 Support
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides reliable 24/7 support for your hosting needs, ensuring assistance whenever you require help."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Free Email
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech offers complimentary email services, empowering your online communication with reliable and secure free email solutions."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides unlimited bandwidth, ensuring seamless data transfer for your website's optimal performance and user experience."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 100 GB SSD Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Elevate your online presence with Zouz Tech, offering unlimited bandwidth for your domain, ensuring optimal performance and seamless data flow."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 99.9% Uptime
                                                        Guarantee
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Web Application
                                                        Firewall
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className={`card-plan__feature--list-trigered ${showMoreFeatures ? 'active' : ''}`} onClick={handleToggle}>
                                                    <span className="text">
                                                        {showMoreFeatures ? 'See Less Features' : 'More Features'} <i className={`fa-sharp fa-regular fa-chevron-${showMoreFeatures ? 'up' : 'down'}`}></i>
                                                    </span>
                                                </li>
                                            </ul>
                                            {showMoreFeatures && (
                                                <ul className="card-plan__feature--list more__feature" style={{ display: 'flex' }}>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech offers generous hosting with 100GB SSD storage, providing ample space for your data and ensuring high-performance storage solutions."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 99.9% Uptime Guarantee</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-xmark"></i> Web Application Firewall</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* single card end */}
                                {/* single card */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card-plan ">
                                        <div className="card-plan__package">
                                            <div className="icon">
                                                <img
                                                    src="assets/images/pricing/cloud.svg"
                                                    height={30}
                                                    width={30}
                                                    alt=""
                                                />
                                            </div>
                                            <h4 className="package__name">Cloud Startup</h4>
                                        </div>
                                        <p className="card-plan__desc">Everything need to your website</p>
                                        <div className="card-plan__offer">
                                            <span className="past-price">$13.956</span>
                                            <span className="offer-given">Save 2    0%</span>
                                        </div>
                                        <h5 className="card-plan__price">
                                            <sup>$</sup> 11.63 <sub>/ month</sub>
                                        </h5>
                                        <div className="card-plan__cartbtn">
                                            <Link to="#">add to cart</Link>
                                        </div>
                                        <p className="card-plan__renew-price">
                                            $ 7.99 /mo when you renew
                                        </p>
                                        <div className="card-plan__feature">
                                            <ul className="card-plan__feature--list">
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 1 Website
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Explore, discover, and learn on our innovative and informative website."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Standard Performance
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our standard performance solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 24/7/365 Support
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides reliable 24/7 support for your hosting needs, ensuring assistance whenever you require help."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Free Email
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech offers complimentary email services, empowering your online communication with reliable and secure free email solutions."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides unlimited bandwidth, ensuring seamless data transfer for your website's optimal performance and user experience."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 100 GB SSD Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Elevate your online presence with Zouz Tech, offering unlimited bandwidth for your domain, ensuring optimal performance and seamless data flow."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 99.9% Uptime
                                                        Guarantee
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Web Application
                                                        Firewall
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className={`card-plan__feature--list-trigered ${showMoreFeatures ? 'active' : ''}`} onClick={handleToggle}>
                                                    <span className="text">
                                                        {showMoreFeatures ? 'See Less Features' : 'More Features'} <i className={`fa-sharp fa-regular fa-chevron-${showMoreFeatures ? 'up' : 'down'}`}></i>
                                                    </span>
                                                </li>
                                            </ul>
                                            {showMoreFeatures && (
                                                <ul className="card-plan__feature--list more__feature" style={{ display: 'flex' }}>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech offers generous hosting with 100GB SSD storage, providing ample space for your data and ensuring high-performance storage solutions."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 99.9% Uptime Guarantee</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-xmark"></i> Web Application Firewall</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* single card end */}
                            </div>
                        </div>
                        {/* PRICING PLAN */}
                        <div className={`price__content ${activeTab === "yearly" ? "open" : ""}`}
                            id="yearly"
                            style={{ display: activeTab === "yearly" ? "block" : "none" }}>
                            <div className="row g-30 yearly">
                                {/* single card */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card-plan">
                                        <div className="card-plan__package">
                                            <div className="icon">
                                                <img
                                                    src="assets/images/pricing/basic.svg"
                                                    height={30}
                                                    width={30}
                                                    alt=""
                                                />
                                            </div>
                                            <h4 className="package__name">Basic</h4>
                                        </div>
                                        <p className="card-plan__desc">Everything need to your website</p>
                                        <div className="card-plan__offer">
                                            <span className="past-price">$120</span>
                                            <span className="offer-given">Save 20%</span>
                                        </div>
                                        <h5 className="card-plan__price">
                                            <sup>$</sup>96 <sub>/ year</sub>
                                        </h5>
                                        <div className="card-plan__cartbtn">
                                            <Link to="#">add to cart</Link>
                                        </div>
                                        <p className="card-plan__renew-price">
                                            $ 79.99 /year when you renew
                                        </p>
                                        <div className="card-plan__feature">
                                            <ul className="card-plan__feature--list">
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 1 Website
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Explore, discover, and learn on our innovative and informative website."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Standard Performance
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our standard performance solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 24/7/365 Support
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides reliable 24/7 support for your hosting needs, ensuring assistance whenever you require help."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Free Email
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech offers complimentary email services, empowering your online communication with reliable and secure free email solutions."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides unlimited bandwidth, ensuring seamless data transfer for your website's optimal performance and user experience."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> 100 GB SSD Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Elevate your online presence with Zouz Tech, offering unlimited bandwidth for your domain, ensuring optimal performance and seamless data flow."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 99.9% Uptime
                                                        Guarantee
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Web Application
                                                        Firewall
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className={`card-plan__feature--list-trigered ${showMoreFeatures ? 'active' : ''}`} onClick={handleToggle}>
                                                    <span className="text">
                                                        {showMoreFeatures ? 'See Less Features' : 'More Features'} <i className={`fa-sharp fa-regular fa-chevron-${showMoreFeatures ? 'up' : 'down'}`}></i>
                                                    </span>
                                                </li>
                                            </ul>
                                            {showMoreFeatures && (
                                                <ul className="card-plan__feature--list more__feature" style={{ display: 'flex' }}>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech offers generous hosting with 100GB SSD storage, providing ample space for your data and ensuring high-performance storage solutions."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 99.9% Uptime Guarantee</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-xmark"></i> Web Application Firewall</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* single card end */}
                                {/* single card */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card-plan">
                                        <div className="card-plan__package">
                                            <div className="icon">
                                                <img
                                                    src="assets/images/pricing/premium.svg"
                                                    height={30}
                                                    width={30}
                                                    alt=""
                                                />
                                            </div>
                                            <h4 className="package__name">Premium</h4>
                                        </div>
                                        <p className="card-plan__desc">Level-up more power features</p>
                                        <div className="card-plan__offer">
                                            <span className="past-price">$151.63</span>
                                            <span className="offer-given">Save 20%</span>
                                        </div>
                                        <h5 className="card-plan__price">
                                            <sup>$</sup> 165.31 <sub>/ year</sub>
                                        </h5>
                                        <div className="card-plan__cartbtn">
                                            <Link to="#">add to cart</Link>
                                        </div>
                                        <p className="card-plan__renew-price">
                                            $ 151.99 /year when you renew
                                        </p>
                                        <div className="card-plan__feature">
                                            <ul className="card-plan__feature--list">
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 1 Website
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Explore, discover, and learn on our innovative and informative website."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Standard Performance
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our standard performance solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 24/7/365 Support
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides reliable 24/7 support for your hosting needs, ensuring assistance whenever you require help."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Free Email
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech offers complimentary email services, empowering your online communication with reliable and secure free email solutions."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides unlimited bandwidth, ensuring seamless data transfer for your website's optimal performance and user experience."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> 100 GB SSD Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Elevate your online presence with Zouz Tech, offering unlimited bandwidth for your domain, ensuring optimal performance and seamless data flow."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 99.9% Uptime
                                                        Guarantee
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Web Application
                                                        Firewall
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className={`card-plan__feature--list-trigered ${showMoreFeatures ? 'active' : ''}`} onClick={handleToggle}>
                                                    <span className="text">
                                                        {showMoreFeatures ? 'See Less Features' : 'More Features'} <i className={`fa-sharp fa-regular fa-chevron-${showMoreFeatures ? 'up' : 'down'}`}></i>
                                                    </span>
                                                </li>
                                            </ul>
                                            {showMoreFeatures && (
                                                <ul className="card-plan__feature--list more__feature" style={{ display: 'flex' }}>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech offers generous hosting with 100GB SSD storage, providing ample space for your data and ensuring high-performance storage solutions."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 99.9% Uptime Guarantee</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-xmark"></i> Web Application Firewall</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* single card end */}
                                {/* single card */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card-plan active">
                                        <div className="popular-tag">most popular</div>
                                        <div className="card-plan__package">
                                            <div className="icon">
                                                <img
                                                    src="assets/images/pricing/business.svg"
                                                    height={30}
                                                    width={30}
                                                    alt=""
                                                />
                                            </div>
                                            <h4 className="package__name">Business</h4>
                                        </div>
                                        <p className="card-plan__desc">Everything need to your website</p>
                                        <div className="card-plan__offer">
                                            <span className="past-price">$235.63</span>
                                            <span className="offer-given">Save 20%</span>
                                        </div>
                                        <h5 className="card-plan__price">
                                            <sup>$</sup> 211.20 <sub>/ year</sub>
                                        </h5>
                                        <div className="card-plan__cartbtn">
                                            <Link to="#">add to cart</Link>
                                        </div>
                                        <p className="card-plan__renew-price">
                                            $ 235.99 /mo when you renew
                                        </p>
                                        <div className="card-plan__feature">
                                            <ul className="card-plan__feature--list">
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 1 Website
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Explore, discover, and learn on our innovative and informative website."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Standard Performance
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our standard performance solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 24/7/365 Support
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides reliable 24/7 support for your hosting needs, ensuring assistance whenever you require help."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Free Email
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech offers complimentary email services, empowering your online communication with reliable and secure free email solutions."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-xmark" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides unlimited bandwidth, ensuring seamless data transfer for your website's optimal performance and user experience."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 100 GB SSD Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Elevate your online presence with Zouz Tech, offering unlimited bandwidth for your domain, ensuring optimal performance and seamless data flow."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 99.9% Uptime
                                                        Guarantee
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Web Application
                                                        Firewall
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className={`card-plan__feature--list-trigered ${showMoreFeatures ? 'active' : ''}`} onClick={handleToggle}>
                                                    <span className="text">
                                                        {showMoreFeatures ? 'See Less Features' : 'More Features'} <i className={`fa-sharp fa-regular fa-chevron-${showMoreFeatures ? 'up' : 'down'}`}></i>
                                                    </span>
                                                </li>
                                            </ul>
                                            {showMoreFeatures && (
                                                <ul className="card-plan__feature--list more__feature" style={{ display: 'flex' }}>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech offers generous hosting with 100GB SSD storage, providing ample space for your data and ensuring high-performance storage solutions."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 99.9% Uptime Guarantee</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-xmark"></i> Web Application Firewall</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* single card end */}
                                {/* single card */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card-plan ">
                                        <div className="card-plan__package">
                                            <div className="icon">
                                                <img
                                                    src="assets/images/pricing/cloud.svg"
                                                    height={30}
                                                    width={30}
                                                    alt=""
                                                />
                                            </div>
                                            <h4 className="package__name">Cloud Startup</h4>
                                        </div>
                                        <p className="card-plan__desc">Everything need to your website</p>
                                        <div className="card-plan__offer">
                                            <span className="past-price">$353.63</span>
                                            <span className="offer-given">Save 60%</span>
                                        </div>
                                        <h5 className="card-plan__price">
                                            <sup>$</sup> 139.63 <sub>/ year</sub>
                                        </h5>
                                        <div className="card-plan__cartbtn">
                                            <Link to="#">add to cart</Link>
                                        </div>
                                        <p className="card-plan__renew-price">
                                            $ 353.99 /mo when you renew
                                        </p>
                                        <div className="card-plan__feature">
                                            <ul className="card-plan__feature--list">
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 1 Website
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Explore, discover, and learn on our innovative and informative website."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Standard Performance
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Unlock superior online experiences with our standard performance solutions, ensuring reliability, speed, and seamless functionality for your website needs."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 24/7/365 Support
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides reliable 24/7 support for your hosting needs, ensuring assistance whenever you require help."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Free Email
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech offers complimentary email services, empowering your online communication with reliable and secure free email solutions."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Bandwidth
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech provides unlimited bandwidth, ensuring seamless data transfer for your website's optimal performance and user experience."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 100 GB SSD Storage
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Elevate your online presence with Zouz Tech, offering unlimited bandwidth for your domain, ensuring optimal performance and seamless data flow."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Unlimited Free SSL
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> 99.9% Uptime
                                                        Guarantee
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className="card-plan__feature--list-item">
                                                    <span className="text">
                                                        <i className="fa-regular fa-check" /> Web Application
                                                        Firewall
                                                    </span>
                                                    <span
                                                        className="tolltip"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."
                                                    >
                                                        <i className="fa-light fa-circle-question" />
                                                    </span>
                                                </li>
                                                <li className={`card-plan__feature--list-trigered ${showMoreFeatures ? 'active' : ''}`} onClick={handleToggle}>
                                                    <span className="text">
                                                        {showMoreFeatures ? 'See Less Features' : 'More Features'} <i className={`fa-sharp fa-regular fa-chevron-${showMoreFeatures ? 'up' : 'down'}`}></i>
                                                    </span>
                                                </li>
                                            </ul>
                                            {showMoreFeatures && (
                                                <ul className="card-plan__feature--list more__feature" style={{ display: 'flex' }}>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 100 GB SSD Storage</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech offers generous hosting with 100GB SSD storage, providing ample space for your data and ensuring high-performance storage solutions."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> Unlimited Free SSL</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Secure your website with Zouz Tech's unlimited free SSL certificates, ensuring encrypted and safe online transactions for your users."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-check"></i> 99.9% Uptime Guarantee</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Zouz Tech guarantees 99% uptime, ensuring your website is consistently available and reliable for visitors around the clock."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                    <li className="card-plan__feature--list-item">
                                                        <span className="text"><i className="fa-regular fa-xmark"></i> Web Application Firewall</span>
                                                        <span className="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Enhance your website's security with Zouz Tech's Web Application Firewall, protecting against online threats and ensuring a safe online environment."><i className="fa-light fa-circle-question"></i></span>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* single card end */}
                            </div>
                        </div>
                    </div>
                    <div className="view-plan-btn">
                        <Link to="/pricing" className="btn long-btn">
                            view all plan
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeFourPricing