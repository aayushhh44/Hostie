import React, { useEffect } from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function HomeElevenBanner() {
    useEffect(() => {
        sal({
            threshold: 0.1,
            once: true,
        });
    }, []);
    return (
        <>
            <div className="hero__banner banner__background">
                <div className="container">
                    <div className="row">
                        <div
                            className="hero__banner__wrapper d-flex flex-wrap flex-lg-nowrap gap-5 gap-lg-0 
          align-items-center justify-content-between justify-content-md-center px-5 px-lg-0"
                        >
                            {/* banner content */}
                            <div className="hero__banner__content">
                                <h6
                                    className="mb-0"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    <span>
                                        <img src="assets/images/index-11/cloud.svg" alt="" />
                                    </span>
                                    30% Discount first month purchase
                                </h6>
                                <h1
                                    className="heading"
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    Premium Hosting for Growing Businesses
                                </h1>
                                <p
                                    className="description"
                                    data-sal="slide-down"
                                    data-sal-delay={400}
                                    data-sal-duration={800}
                                >
                                    Discover our cutting-edge cloud hosting solutions designed to
                                    elevate your online presence. With lightning-fast performance.
                                </p>
                                <div className="domain__options">
                                    <div className="tab__selection mb--20">
                                        <nav>
                                            <div
                                                className="nav nav-tabs d-flex flex-nowrap"
                                                id="nav-tab"
                                                role="tablist"
                                            >
                                                <button
                                                    className="nav-link active"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#register"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="register"
                                                    aria-selected="true"
                                                >
                                                    Register
                                                </button>
                                                <button
                                                    className="nav-link"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#transfer"
                                                    aria-controls="transfer"
                                                >
                                                    Transfer
                                                </button>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="domain__form">
                                        <div id="nav-tabcontent" className="tab-content">
                                            <div
                                                id="register"
                                                className="tab-pane fade active show"
                                                role="tabpanel"
                                            >
                                                <form action="#" className="domain__search d-flex">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter domain name"
                                                        required
                                                    />
                                                    <select name="r" id="r">
                                                        <option value=".com">.com</option>
                                                        <option value=".net">.net</option>
                                                        <option value=".love">.love</option>
                                                        <option value=".pw">.pw</option>
                                                        <option value=".org">.org</option>
                                                        <option value=".org">.org</option>
                                                        <option value=".info">.info</option>
                                                        <option value=".info">.info</option>
                                                        <option value=".xyz">.xyz</option>
                                                    </select>
                                                    <button type="submit" className="btn__primary">
                                                        Search
                                                    </button>
                                                </form>
                                            </div>
                                            <div id="transfer" className="tab-pane fade" role="tabpanel">
                                                <form action="#" className="domain__search d-flex">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter domain name"
                                                        required=""
                                                    />
                                                    <select name="t" id="t">
                                                        <option value=".com">.com</option>
                                                        <option value=".net">.net</option>
                                                        <option value=".love">.love</option>
                                                        <option value=".pw">.pw</option>
                                                        <option value=".org">.org</option>
                                                        <option value=".org">.org</option>
                                                        <option value=".info">.info</option>
                                                        <option value=".info">.info</option>
                                                        <option value=".xyz">.xyz</option>
                                                    </select>
                                                    <button type="submit" className="btn__primary">
                                                        Transfer
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="domain__list d-flex gap-5">
                                        <div className="single__domain d-flex gap-1">
                                            <strong>.com</strong>
                                            <span>only $6.19</span>
                                        </div>
                                        <div className="single__domain d-flex gap-1">
                                            <strong>.org</strong>
                                            <span>only $5.19</span>
                                        </div>
                                        <div className="single__domain d-flex gap-1">
                                            <strong>.xyz</strong>
                                            <span>only $1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* banner content end */}
                            {/* banner image */}
                            <div className="hero__banner__image start-5 position-relative d-flex align-items-end">
                                <figure className="banner__image ">
                                    <img src="assets/images/index-11/banner__image.svg" alt="" />
                                </figure>
                            </div>
                            {/* banner image end */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeElevenBanner