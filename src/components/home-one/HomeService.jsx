import React from 'react'
import { Link } from 'react-router-dom';
function HomeService() {
    return (
        <>
            <section className="rts-service section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="rts-section text-center w-530">
                            <h3 className="rts-section__title" data-sal="slide-down" data-sal-delay={300} data-sal-duration={800}>
                                We Provide Hosting Solution
                            </h3>
                            <p className="rts-section__description" data-sal="slide-down" data-sal-delay={400} data-sal-duration={800} >
                                Select your solution and we will help you narrow down our best
                                high-speed options to fit your needs.
                            </p>
                        </div>
                    </div>
                    {/* service list */}
                    <div className="row">
                        <div className="rts-service__wrapper">
                            <div className="rts-service__column">
                                {/* single service */}
                                <div className="rts-service__single">
                                    <div className="rts-service__single--icon shared__hosting">
                                        <img src="assets/images/service/shared__hosting.svg" alt="" />
                                    </div>
                                    <Link to="shared-hosting" className="rts-service__single--title">
                                        Shared Hosting
                                    </Link>
                                    <p className="rts-service__single--excerpt">
                                        The most popular hosting plan available and comes at one of the
                                        most.
                                    </p>
                                    <Link to="shared-hosting" className="rts-service__single--btn">
                                        View Details <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                {/* single service end */}
                                {/* single service */}
                                <div className="rts-service__single">
                                    <div className="rts-service__single--icon email__hosting">
                                        <img src="assets/images/service/email__hosting.svg" alt="" />
                                    </div>
                                    <Link to="business-mail" className="rts-service__single--title">
                                        Email Hosting
                                    </Link>
                                    <p className="rts-service__single--excerpt">
                                        The most popular hosting plan available and comes at one of the
                                        most.
                                    </p>
                                    <Link to="business-mail" className="rts-service__single--btn">
                                        View Details <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                {/* single service end */}
                            </div>
                            <div className="rts-service__column">
                                {/* single service */}
                                <div className="rts-service__single">
                                    <div className="rts-service__single--icon wordpress__hosting">
                                        <img src="assets/images/service/shared__hosting.svg" alt="" />
                                    </div>
                                    <Link
                                        to="wordpress-hosting"
                                        className="rts-service__single--title"
                                    >
                                        WordPress Hosting
                                    </Link>
                                    <p className="rts-service__single--excerpt">
                                        The most popular hosting plan available and comes at one of the
                                        most.
                                    </p>
                                    <Link
                                        to="wordpress-hosting"
                                        className="rts-service__single--btn"
                                    >
                                        View Details <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                {/* single service end */}
                                {/* single service */}
                                <div className="rts-service__single">
                                    <div className="rts-service__single--icon dedicated__hosting">
                                        <img src="assets/images/service/dedicated__hosting.svg" alt="" />
                                    </div>
                                    <Link
                                        to="dedicated-hosting"
                                        className="rts-service__single--title"
                                    >
                                        dedicated Hosting
                                    </Link>
                                    <p className="rts-service__single--excerpt">
                                        The most popular hosting plan available and comes at one of the
                                        most.
                                    </p>
                                    <Link
                                        to="dedicated-hosting"
                                        className="rts-service__single--btn"
                                    >
                                        View Details <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                {/* single service end */}
                            </div>
                            <div className="rts-service__column">
                                {/* single service */}
                                <div className="rts-service__single">
                                    <div className="rts-service__single--icon vps__hosting">
                                        <img src="assets/images/service/vps__hosting.svg" alt="" />
                                    </div>
                                    <Link to="vps-hosting" className="rts-service__single--title">
                                        VPS Hosting
                                    </Link>
                                    <p className="rts-service__single--excerpt">
                                        The most popular hosting plan available and comes at one of the
                                        most.
                                    </p>
                                    <Link to="vps-hosting" className="rts-service__single--btn">
                                        View Details <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                {/* single service end */}
                                {/* single service */}
                                <div className="rts-service__single">
                                    <div className="rts-service__single--icon eccomerce__hosting">
                                        <img src="assets/images/service/eccommerce__hosting.svg" alt="" />
                                    </div>
                                    <Link
                                        to="wordpress-hosting"
                                        className="rts-service__single--title"
                                    >
                                        eccommerce Hosting
                                    </Link>
                                    <p className="rts-service__single--excerpt">
                                        The most popular hosting plan available and comes at one of the
                                        most.
                                    </p>
                                    <Link
                                        to="wordpress-hosting"
                                        className="rts-service__single--btn"
                                    >
                                        View Details <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                {/* single service end */}
                            </div>
                            <div className="rts-service__column">
                                {/* single service */}
                                <div className="rts-service__single">
                                    <div className="rts-service__single--icon reseller__hosting">
                                        <img src="assets/images/service/resseller__hosting.svg" alt="" />
                                    </div>
                                    <Link to="reseller-hosting" className="rts-service__single--title">
                                        Reseller Hosting
                                    </Link>
                                    <p className="rts-service__single--excerpt">
                                        The most popular hosting plan available and comes at one of the
                                        most.
                                    </p>
                                    <Link to="reseller-hosting" className="rts-service__single--btn">
                                        View Details <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                {/* single service end */}
                                {/* single service */}
                                <div className="rts-service__single">
                                    <div className="rts-service__single--icon cloud__hosting">
                                        <img src="assets/images/service/cloud__hosting.svg" alt="" />
                                    </div>
                                    <Link to="cloud-hosting" className="rts-service__single--title">
                                        cloud Hosting
                                    </Link>
                                    <p className="rts-service__single--excerpt">
                                        The most popular hosting plan available and comes at one of the
                                        most.
                                    </p>
                                    <Link to="cloud-hosting" className="rts-service__single--btn">
                                        View Details <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                {/* single service end */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeService