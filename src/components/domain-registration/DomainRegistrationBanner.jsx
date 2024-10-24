import React, { useEffect } from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
function DomainRegistrationBanner() {
    useEffect(() => {
        sal({
            threshold: 0.1,
            once: true,
        });
    }, []);
    return (
        <>
            <section className="rts-hero-three rts-hosting-banner rts-hero__one domain-checker-padding banner-default-height">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="rts-hero__content domain">
                                <h1
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Register Your Domain
                                </h1>
                                <p
                                    className="description"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Enter the domain that you would like to transfer to Hostie
                                </p>
                                <form action="https://hostie-whmcs.themewant.com/cart.php">
                                    <div className="rts-hero__form-area">
                                        <input type="hidden" name="domain" defaultValue="register" />
                                        <input type="hidden" name="a" defaultValue="add" />
                                        <input
                                            type="text"
                                            placeholder="find your domain name"
                                            name="query"
                                            required=""
                                        />
                                        <div className="select-button-area">
                                            <select
                                                name="domain_type"
                                                id="select"
                                                className="price__select"
                                            >
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
                                            <button type="submit">Search</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="banner-content-tag">
                                    <p className="desc" data-sal-delay={400} data-sal-duration={800}>
                                        Looking for a new domain name?{" "}
                                        <Link to="/domain-checker">Try domain checker</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape-area">
                    <img
                        className="three"
                        src="assets/images/banner/banner-bg-element.svg"
                        alt=""
                    />
                </div>
            </section>

        </>
    )
}

export default DomainRegistrationBanner