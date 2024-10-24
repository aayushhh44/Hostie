import React, { useEffect } from 'react'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function DomainCheckerBanner() {
    useEffect(() => {
        sal({
            threshold: 0.1,
            once: true,
        });
    }, []);
    return (
        <>
            <section className="rts-hero-three rts-hero__one rts-hosting-banner domain-checker-padding banner-default-height">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="rts-hero__content domain">
                                <h1
                                    data-sal="slide-down"
                                    data-sal-delay={100}
                                    data-sal-duration={800}
                                >
                                    Find Best Unique Domains Checker!
                                </h1>
                                <p
                                    className="description"
                                    data-sal="slide-down"
                                    data-sal-delay={200}
                                    data-sal-duration={800}
                                >
                                    Web Hosting, Domain Name and Hosting Center Solutions
                                </p>
                                <form
                                    action="https://hostie-whmcs.themewant.com/cart.php"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    <div className="rts-hero__form-area">
                                        <input type="hidden" name="domain" defaultValue="register" />
                                        <input type="hidden" name="a" defaultValue="add" />
                                        <input
                                            type="text"
                                            placeholder="find your domain name"
                                            name="query"
                                            required
                                        />
                                        <div className="select-button-area">
                                            <select name="select" id="select" className="price__select">
                                                <option value={1}>.com</option>
                                                <option value={1}>.net</option>
                                                <option value={1}>.love</option>
                                            </select>
                                            <button type="submit">Search</button>
                                        </div>
                                    </div>
                                </form>
                                <div
                                    className="banner-content-tag"
                                    data-sal-delay={400}
                                    data-sal-duration={800}
                                >
                                    <p className="desc">Popular Domain:</p>
                                    <ul className="tag-list">
                                        <li>
                                            <span>.com</span>
                                            <span>$6.19</span>
                                        </li>
                                        <li>
                                            <span>.net</span>
                                            <span>$6.19</span>
                                        </li>
                                        <li>
                                            <span>.org</span>
                                            <span>$6.19</span>
                                        </li>
                                        <li>
                                            <span>.info</span>
                                            <span>$6.19</span>
                                        </li>
                                        <li>
                                            <span>.xyz</span>
                                            <span>$6.19</span>
                                        </li>
                                    </ul>
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

export default DomainCheckerBanner