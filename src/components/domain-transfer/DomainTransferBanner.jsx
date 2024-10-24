import React, { useEffect } from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
function DomainTransferBanner() {
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
                                    We Made Domain Transfer Easy
                                </h1>
                                <p
                                    className="description"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Enter the domain that you would like to transfer to Hostie
                                </p>
                                <form
                                    action="https://hostie-whmcs.themewant.com/cart.php"
                                    className="domain-form d-flex gap-3"
                                >
                                    <input type="hidden" name="domain" defaultValue="register" />
                                    <input type="hidden" name="a" defaultValue="add" />
                                    <input
                                        type="text"
                                        placeholder="Enter the domain you want to transfer"
                                        name="query"
                                        required=""
                                    />
                                    <button className="submit-btn" type="submit" name="domain_type">
                                        Transfer
                                    </button>
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

export default DomainTransferBanner