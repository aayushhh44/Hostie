import React from 'react'

function HomeFourDomainChecker() {
    return (
        <>
            <div className="rts-domain-checker-two section__padding">
                <div className="container">
                    <div className="row">
                        <div className="rts-hero__content">
                            <h1 data-sal="slide-down" data-sal-delay={100} data-sal-duration={800}>
                                Find Your Domain Name
                            </h1>
                            <p
                                className="description"
                                data-sal="slide-down"
                                data-sal-delay={100}
                                data-sal-duration={800}
                            >
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
                                        <select name="domain_type" id="select" className="price__select">
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

        </>
    )
}

export default HomeFourDomainChecker