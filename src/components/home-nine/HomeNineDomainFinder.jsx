import React from 'react'

function HomeNineDomainFinder() {
    return (
        <>
            <div className="rts-domain-finder wp__hosting__option">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-domain-finder__content domain-finder-bg">
                                <h3
                                    data-sal="slide-down"
                                    data-sal-delay={300}
                                    data-sal-duration={800}
                                >
                                    A name that looks good on a billboard.
                                </h3>
                                <form
                                    action="https://hostie-whmcs.themewant.com/cart.php"
                                    className="domain-checker"
                                    data-sal="slide-down"
                                    data-sal-delay={400}
                                    data-sal-duration={800}
                                >
                                    <input
                                        type="text"
                                        id="domain-name"
                                        name="query"
                                        placeholder="Register a domain name to start"
                                        required
                                    />
                                    <input type="hidden" name="domain" defaultValue="register" />
                                    <input type="hidden" name="a" defaultValue="add" />
                                    <button type="submit" name="domain_type">
                                        search domain
                                    </button>
                                </form>
                                <div className="compare">
                                    <div className="compare__list">
                                        <ul>
                                            <li
                                                data-sal="slide-down"
                                                data-sal-delay={500}
                                                data-sal-duration={800}
                                            >
                                                Compare:
                                            </li>
                                            <li
                                                data-sal="slide-down"
                                                data-sal-delay={600}
                                                data-sal-duration={800}
                                            >
                                                <span className="ext">.com</span> only $6.19
                                            </li>
                                            <li
                                                data-sal="slide-down"
                                                data-sal-delay={700}
                                                data-sal-duration={800}
                                            >
                                                <span className="ext">.net</span> only $6.19
                                            </li>
                                            <li
                                                data-sal="slide-down"
                                                data-sal-delay={800}
                                                data-sal-duration={800}
                                            >
                                                <span className="ext">.info</span> only $6.19
                                            </li>
                                            <li
                                                data-sal="slide-down"
                                                data-sal-delay={900}
                                                data-sal-duration={800}
                                            >
                                                <span className="ext">.org</span> only $6.19
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeNineDomainFinder