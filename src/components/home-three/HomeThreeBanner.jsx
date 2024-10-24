import React from 'react'

function HomeThreeBanner() {
    return (
        <>
            <section className="rts-hero-three">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="rts-hero__content">
                                <h1>Find Your Perfect Domain Name</h1>
                                <p className="description">
                                    Web Hosting, Domain Name and Hosting Center Solutions
                                </p>
                                <form action="https://hostie-whmcs.themewant.com/cart.php">
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
                <div className="hero-image-big">
                    <img src="assets/images/banner/banner-hero-3.png" alt="" />
                </div>
                <div className="banner-shape-area">
                    <img
                        className="one"
                        src="assets/images/banner/banner-shape-3_1.png"
                        alt=""
                    />
                    <img
                        className="two"
                        src="assets/images/banner/banner-shape-3_2.png"
                        alt=""
                    />
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

export default HomeThreeBanner